const express = require('express');
//const com instancia da biblioteca express
const aplicacao = express();
const port = 4000;

aplicacao.get('/', (req, res) => {
    res.send("Chamei o backend com sucesso");
});

aplicacao.post('/', (req,res) => {
    res.send("Chamei back com sucesso usando post");
});

//Criando os endpoints
aplicacao.get('/moedas', (req,res) => {
    res.send("Compatível com Real, Dólar e Euro");

   /* const moedas = {
        BRL: "real",
        USD: "dolar",
        EUR: "euro"
    }

    res.status(200).json(moedas); */
});

aplicacao.get('/info', (req,res) => {
    res.send("Informações sobre o sistema")

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
    let moeda1 = moedas[0];
    let moeda2 = moedas[1];



    //Fazer processo de conversão no back para retornar no front
    console.log(req.parms);
    conversao = {};

    res.status(200).json(conversao);

});


//Aplicação ouvindo a porta 4000
aplicacao.listen(port, () => {
    console.log("Escutando na porta 4000");
});

//Ao rodar "node .\index.js" o servidor começa
//ao acessar url "http://localhost:4000" acessa ele
//Use POSTMAN para utilizar outros métodos HTTP

