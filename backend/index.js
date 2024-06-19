const express = require('express');
const cors = require('cors');
//const com instancia da biblioteca express
const aplicacao = express();
const port = 4000;

aplicacao.use(cors());
//NÃO BOA PRÁTICA MAS OK, DO SCRIPTCONVERSOR.JS
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
//Peguei do /moedas para valer em qualquer lugar
const relacaoMoedas = {
    BRL: "real",
    USD: "dolar",
    EUR: "euro"
}

aplicacao.get('/', (req, res) => {
    res.send("Chamei o backend com sucesso");
});

aplicacao.post('/', (req,res) => {
    res.send("Chamei back com sucesso usando post");
});

aplicacao.post('/moedas', (req,res) => {
    const moedas = {
        BRL: "real",
        USD: "dolar",
        EUR: "euro"
    }

    res.status(200).json(moedas);
})

//Criando os endpoints
aplicacao.get('/moedas', (req,res) => {
   // res.send("Compatível com Real, Dólar e Euro");

    const moedas = {
        BRL: "real",
        USD: "dolar",
        EUR: "euro"
    }

    res.status(200).json(moedas); 
});

aplicacao.get('/info', (req,res) => {
    //res.send("Informações sobre o sistema")

    const informacoes = {
        version: "1.0",
        author: "Léscillei",
        update: "Maio de 2024",
        price: "free",
        license: "ABC"
    }

    res.status(200).json(informacoes);
});

aplicacao.get('/conversao/:moedas', (req,res) => {
    //processo de conversão
    //na lista de moedas, separada por -, o primeiro da lista será moeda1 e segundo a moeda2
    let moedas = req.params.moedas.split("-");
    //UpperCase para garantir o maiusculo
    let moeda1 = moedas[0].toUpperCase();
    let moeda2 = moedas[1].toUpperCase();

    if (moedas.length != 2) {
        console.log("Não tem 2 parametros");
        res.status(400);
        return;
    }

    if (moeda1 != "BRL"&& moeda1 != "EUR" && moeda1 != "USD"){
        console.log("Moeda 1 não suportada")
        res.status(400);
        return;
    }

    if (moeda2 != "BRL"&& moeda2 != "EUR" && moeda2 != "USD"){
        console.log("Moeda 2 não suportada")
        res.status(400);
        return;
    }

    console.log("moeda1 é " + moeda1);
    console.log("moeda2 é " + moeda2);

    console.log(relacaoMoedas[moeda1]);
    console.log(relacaoMoedas[moeda2]);

    console.log(valoresConversao[relacaoMoedas[moeda1]][relacaoMoedas[moeda2]])

    let fatorConversao = valoresConversao[relacaoMoedas[moeda1]][relacaoMoedas[moeda2]];


    //Fazer processo de conversão no back para retornar no front
    //console.log(req.parms);
    //var: indice
    conversao = {
        fator: fatorConversao
    };

    res.status(200).json(conversao);

});


//Aplicação ouvindo a porta 4000
aplicacao.listen(port, () => {
    console.log("Escutando na porta 4000");
});

//Ao rodar "node .\index.js" o servidor começa
//ao acessar url "http://localhost:4000" acessa ele
//Use POSTMAN para utilizar outros métodos HTTP

