console.log("teste")
console.warn("teste")

//var teste; = não adequado
let teste = 1.1;
let variavelString = "Hello world!";
let aceitouCookies = false;

const PI = 3.14;

console.log(teste);
console.log(variavelString);

/*sobrescrevendo:
var > muda tipo,
const > erro*/

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