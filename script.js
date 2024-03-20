/*console.log("teste")
console.warn("teste")

//var teste; = não adequado
let teste = 1.1;
let variavelString = "Hello world!";
let aceitouCookies = false;

const PI = 3.14;

console.log(teste);
console.log(variavelString);

sobrescrevendo:
var > muda tipo,
const > erro

teste = "abc";
PI = 3.15;

//Retorna o tipo
console.log(typeof(teste));
console.log(typeof(aceitouCookies));

let a = 5;
let b = 10;
console.log(a % b);

let numero1 = 0.1;
let numero2 = 0.2;
console.log(numero1 + numero2);

//Concatenar
let texto1 = "Hello";
let texto2 = "World!";
let resultadoTexto = texto1 + " " + texto2;
console.log(resultadoTexto);
*/
/*
//Condicional
let nome = "Joao";
let idade = 18;
let idadePermitida = 18;

if (idade >= idadePermitida && nome === "Joao") {
    console.log("Usuário pode entrar no site");
} else {
    console.log("Usuário não pode entrar no site");
}

let meuArray = [1, 2, 3 ,4];
console.log(meuArray[0]);
console.log(meuArray);
console.log(meuArray.length);

//Objetos > nome: valor,
let meuObjetoPessoa = {
    nome: "joao",
    idade: 18,
    altura: 1.70
}
console.log(meuObjetoPessoa);
console.log("a idade da pessoa "+ meuObjetoPessoa['nome'] + " é: " + meuObjetoPessoa.idade);

//Imprima no console de 1 a 5
//1 jeito = laço for (começo; parada; incremento)
// i = i+1 > i++
for (let i = 1; i < 6; i++) {
    console.log(i);
}

//2 jeito = while
let i = 1;
while (i < 6) {
    console.log(i);
    i++;
}
*/
//Usando document > pegando do HTML
 let conteudo;
 conteudo = document.getElementById("paragrafo-legal");
 conteudo.innerHTML = "<h1>Esse vem do JavaScript</h1>"
 console.log(typeof(conteudo));
 console.log(conteudo);

 let conteudo2;
 conteudo2 = document.getElementById("titulos");
conteudo2.innerHTML = "<marquee>Conteúdo do JavaScript</marquee>"

 console.log(typeof(conteudo2));
 console.log(conteudo2.innerHTML);