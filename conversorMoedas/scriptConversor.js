const valoresConversao = {
    real: {
        euro: 0.19,
        dolar: 0.20,
        simbolo: "R$"
    },
    dolar: {
        real: 4.99,
        euro: 0.92,
        simbolo: "US$"
    },
    euro: {
        real: 5.40,
        dolar: 1.08,
        simbolo: "EU"
    }
}

const relacaoNomesMoedas = {
    real: "BRL",
    dolar: "USD",
    euro: "EUR"
}


const botaoInverter = document.getElementById("botao-inverter");
botaoInverter.addEventListener("click", inverter);

const botaoConverter = document.getElementById("botao-converter");
botaoConverter.addEventListener("click", converter);

const botaoLimpar = document.getElementById("botao-limpar");
botaoLimpar.addEventListener("click", limpar);

const botaoAceitaMensagem = document.getElementById("botao-aceita-mensagem");
botaoAceitaMensagem.addEventListener("click", aceitarMensagem);

//Sumir ao clicar no botão
function aceitarMensagem() {
    const divMensagemUsuario = document.getElementById("mensagem-usuario");
    divMensagemUsuario.classList.add("oculto");
    //Salvando no localStorage
    localStorage.setItem("aceitouCookie", "1");
}
console.log(localStorage.getItem("aceitouCookie"))
if(localStorage.getItem("aceitouCookie") == "1") {
    const divMensagemUsuario = document.getElementById("mensagem-usuario");
    divMensagemUsuario.classList.add("oculto");
}


function buscaConversaoAPI (moedaOrigem, moedaDestino) {
    //Começo é igual, depois que passa as moedas
    let urlAPI = "https://economia.awesomeapi.com.br/last/";
    urlAPI = urlAPI + moedaOrigem + "-" + moedaDestino;

    console.log(urlAPI);

    let responseAPI;

    fetch(urlAPI)
        .then(function(response){
            if (response.status == 200) {
                console.log("A chamada foi um sucesso!");
            }
            return response.json();
    })
    .then(function(data){
        let objetoEmJSON = JSON.stringify(data);
        console.log(data[moedaOrigem + moedaDestino]["ask"]); //ask é o fator de conversão
        console.log(objetoEmJSON)
        //retornar parâmetro de conversao que está no atributo ask
        responseAPI = data[moedaOrigem + moedaDestino]["ask"];
        //return data[moedaOrigem + moedaDestino]["ask"];
    })
        .catch(function(error){
            console.log("ERRO");
            console.log(error);
    })

    return responseAPI;
}

//Utilizando teclado
//addEventListener e keydown e keypress > segredo por aí
let valorUsuario = document.getElementById("valorEntrada");
valorUsuario.addEventListener("keypress", function(event) {
    
    //Prevenir ativar default do navegador
    console.log(event);
    //event.preventDefault();
    if (event.ctrlKey == true && event.key == "L") {
        event.preventDefault();
        limpar();
    }

    if(event.ctrlKey == true && event.code == "KeyI") {
        event.preventDefault();
        inverter();
    }

    //if(event.ctrlKey == true && event.code == "KeyL") {
    //    alert("works")
    //    event.preventDefault();
    //    limpar();
    //}

    //if (event.key == "Enter") {
    //    alert("oi")
    //    event.preventDefault();
    //    converter();
    //}

});
//console.log(valoresConversao['real']['euro']);

function converter () {
    //Array
    let historicoRecuperado = recuperaHistorico();


    let valorUsuario = document.getElementById("valorEntrada").value;
    let moeda1 = document.getElementById("moeda1").value;
    let moeda2 = document.getElementById("moeda2").value;

    
    console.log(moeda1);
    console.log(moeda2);

    console.log(relacaoNomesMoedas[moeda1]);
    console.log(relacaoNomesMoedas[moeda2]);

    //converter valores moeda1 e 2 para valores da API
    //use console.log = ver o que está sendo retornado com mooeda1/2

    if (moeda1 == moeda2) {
        alert("As moedas são iguais");
        return;
    }

    if (valorUsuario <= 0 || valorUsuario == ""){
        alert ("Valor não suportado");
        return;
    }
    //converter valores moeda1 e 2 para valores da API
    //use console.log = ver o que está sendo retornado com mooeda1/2
    buscaConversaoAPI(relacaoNomesMoedas[moeda1],relacaoNomesMoedas[moeda2]);

    let simbolo = valoresConversao[moeda2]["simbolo"];

    let resultado = valorUsuario * valoresConversao[moeda1][moeda2];
    //alert(valoresConversao[moeda1][moeda2]);
    //console.log(resultado); > Conferir se está com só 2 casas decimais mesmo
    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = simbolo + " " + resultado.toFixed(2);

    let objetoResultado = {
        valorDoUsuario: valorUsuario,
        valorMoeda1: moeda1,
        valorMoeda2: moeda2,
        valorResultado: resultado.toFixed(2)
    }
    //antes: converter objeto JS para JSON = JSON.stringify()
    //let objetoResultadoJSON = JSON.stringify(objetoResultado);
    //localStorage.setItem("historico", objetoResultadoJSON);
    
    salvarHistorico(objetoResultado);

}

function recuperaHistorico () {
    //pegar (get) do localStorage valor da chave historico
    //localStorage = string > Recupere OBJETO JS (reverter)
    let historico = localStorage.getItem("historico");
    
    if (!historico) {
        return [];
    }
    
    let historicoObjeto = JSON.parse(historico);

    return historicoObjeto;
    //Testar = recuperaHistorico no começo do converter
}

//Salvar: Histórico de conversão
//Recupera > push > array > localStorage
function salvarHistorico (conversao) {
    let historico = recuperaHistorico(); //array de objetos, salva conversão no final
    //array.push(algo); = add ao final do array
    historico.push(conversao);
    localStorage.setItem("historico", JSON.stringify(historico));
}

function limpar () {
    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = "";
    let valorEntrada = document.getElementById("valorEntrada");
    valorEntrada.value = "";
}

function inverter () {
    let valorMoeda1 = document.getElementById("moeda1").value;
    let valorMoeda2 = document.getElementById("moeda2").value;

    document.getElementById("moeda1").value = valorMoeda2;
    document.getElementById("moeda2").value = valorMoeda1;
}