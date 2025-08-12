"use strict";
//Variaveis
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
//String
var nome = "leonardo";
//Number
var idade = 50;
// Boolean
var deMaior = true;
//--------------------------------------------------------------------
//Arrays
var numeros = [1, 2, 3];
var nomes = ['Leo', 'Pedro', 'Arthur'];
//Objeto
var pessoa = {
    nome: "Leo",
    idade: 50
};
//Função de tipagem number
function calcula(num, num2) {
    return num + num2;
}
console.log(calcula(200, 40));
function mensagem(meuNome) {
    return "ola $(meuNome), tudobem com voc\u00EA?";
}
function frase() {
    console.log("E ae");
}
//Função com parâmetros opcionais
function sayHello(name) {
    console.log("Hello,", name || "world");
}
sayHello();
sayHello("Leonardo");
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100), applyDiscount(100, 0.9));
var myDog = new Dog_1.Dog("Bob", 15, "Pitbull");
var myOtherDog = new Dog_1.Dog("Fido", 10, "Pincher");
//Assim eu acesso seus atributos
console.log(myDog.breed); //Pitbull
console.log(myOtherDog.name); // Fido
//Assim  eu chamo os métodos
myDog.bark();
myOtherDog.eat();
