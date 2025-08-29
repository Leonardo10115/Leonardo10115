let peso = 80
let altura = 1.75
let calculo = altura*altura
let calculo2 = peso/calculo
if (calculo2>26){
console.log("Você esta acima do peso")

}
else if(calculo2<20){
    console.log("Vai tomar bomba que é mais facil")

}
else if(calculo2 === 21 || calculo2 === 22 || calculo2 === 23){
    console.log("Está no ideal")
}

//Nota
let nota1 = 5
let nota2 = 11
let nota3 = 7
let soma = nota1+nota2+nota3
let media = soma/3

if (media>=9){
    console.log("Nota A")
}
else if (media >=9){

}




//Carro

let idade = 18
let medio = true
if (idade>=18 && medio){
    console.log("pode ter um carro")
}
else{
    console.log("Não pode ter o carro")}{
}

 const ps = require("prompt-sync")
const prompt = ps()
let name = prompt("Qual seu nome:")
console.log(name)


if(name === "Leonardo"){
    console.log("Logado")
}if(name ==! "Leonardo"){
    console.log("Não Logado")
}

let nota = 3
if(nota >= 6){
    console.log("Aprovado")
}else if(nota < 6){
    console.log("Reprovado")
}

let lado1 = prompt ("Lado: ")
let lado2 = prompt ("Lado: ")
let lado3 = prompt ("lado: ")
if (lado1 === lado2 && lado2 === lado3 && lado1 === lado3){
    console.log("Equilátero")
}else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log("Isóceles")
}else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
    console.log("Escaleno")
}


let tipo_entrega = prompt("Defina tipo entrega: ")
let km = prompt("Defina distancia em km:")

function calcula_normal(km){
    return km*0.50
}

function calcula_expressa(km){
    if(km > 100){
        return km * 100
    }else{
        return km*0.75
    }
    
}
function mostra_valor(valor){
    console.log(valor)
}
if (tipo_entrega === "Normal"){
    valor = calcula_normal(km)
    mostra_valor(valor)
}
if (tipo_entrega === "Expressa"){
     valor = calcula_expressa(km)
     mostra_valor(valor) 
}else{
    console.log("Invalida")
}

let operação = prompt("Escolha a sua operação: ")
let part1 = Number (prompt("Escolha algum numero: "))
let part2 = Number (prompt("Escolha outra numero: "))
function menos(part1,part2){
    return part1 - part2
}if(operação === "menos"){
    console.log(menos(part1, part2))
}
function adicao(part1, part2){
    return part1 + part2
}if(operação === "adicao"){
    console.log(adicao(part1, part2))
}
function divisao(part1, part2){
    return part1 / part2
}if(operação === "divisao"){
    console.log(divisao(part1, part2))
}
function multiplicacao(part1, part2){
    return part1 * part2
}if(operação === "multiplicacao"){
    console.log(multiplicacao(part1, part2))
}





let number = Number (prompt("escolha um numero: "))
let number2 = Number(prompt("Escolha outro numero: "))

function potencia(number, number2){
   return Math.pow(number, number2);
}
let resulta = potencia(number,number2);
console.log(resulta);

let num = Number(prompt("Numero: "))
const numero = 16;
const raizQuadrada = Math.sqrt(numero);
console.log(raizQuadrada);


let idad = Number(prompt("idade: "))
function valoridade(idad){
    return idad/2 + 7
}
let resultad = (idad / 2 + 7)
console.log("idade min =" +  resultad)
function valoridadem(idad){
    return 2*(idad - 7) 
}
let resolvido = (2*(idad - 7))
console.log("idade maxima =" + resolvido)














