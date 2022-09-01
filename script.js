/*
const nome = prompt("Qual o seu nome?")
const cor = prompt("Qual a sua cor favorita?")
const citacao = prompt("Qual a sua citação favorita?")

//5 - Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas;

const nomeMaiusculo = nome.toUpperCase()

//Vamos fazer o programa duas vezes?
//2.1 - Na primeira, com concatenação
//3 - Altere a primeira string para que a pessoa também envie sua citação favorita. 
//3.1 - Essa citação deve ser impressa entre aspas.


console.log("A cor favorita de " + nomeMaiusculo + " é " + cor + "e a sua citação favorita é \"" + citacao + "\".")

//2.2 E a segunda com Template Strings. 
//4- Altere a segunda string que criamos, para que seja impressa dessa forma do slide 

console.log(`Nome: ${nomeMaiusculo} \nCor favorita: ${cor}`)

//6 - Exiba no console quantos caracteres tem o nome da pessoa.
console.log(`Quantidade de caracteres: ${nome.leght}`)

//7 - Cheque se o nome possui a letra A
const verificarLetra = nome.includes("a")
console.log("O nome da pessoa tem letra a? " + verificarLetra)

//string = string.replace('z','s').toUpperCase();

*/
const nomeUsuario = prompt("Digite seu nome:")
const emailUsuario = prompt("Digite seu email:")
const checarLetra = emailUsuario.includes("@")
//const trocarLetras = nomeUsuario.replaceAll('r','l').toUpperCase

const frase = "O e-mail " + emailUsuario + " foi cadastrado com sucesso. Boas vindas " + nomeUsuario + "! \nSeu nome possui: " + nomeUsuario.length + " caracteres. \nExsite @ na resposta? " + checarLetra + "." 

console.log("O e-mail " + emailUsuario + " foi cadastrado com sucesso. Boas vindas " + nomeUsuario + "! \nSeu nome possui: " + nomeUsuario.length + " caracteres. \nExsite @ na resposta? " + checarLetra + "." )

console.log(frase.replaceAll('r','l'))

 // ou fazer para nome e email -> console.log(nomeUsuario.replaceAll('r','l'),(emailUsuario.replaceAll('r','l')))











