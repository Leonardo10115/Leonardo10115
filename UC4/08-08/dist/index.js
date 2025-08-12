"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const idade = 18;
const temCarteira = false;
if (idade >= 18 && temCarteira) {
    console.log("Voce pode dirigir.");
}
else if (idade >= 18 && !temCarteira) {
    console.log("Voce é de maior mas nao tem carteira. Não pode dirigir.");
}
else {
    console.log("Voce é menor de idade.");
}
const pontuacao = 85;
const resultado = pontuacao >= 60 ? "Aprovado" : "Reprovado";
console.log(resultado);
//Mesmo resultado que teria codigo de cima porem ele e uma versao mais basica, se precisar de else, else if ele 
//nao sera usado
/*
const pontuacao = 85
let resultado
if(pontuacao >= 60) {
    resultado = "Aprovado"
}else {
    resultado = "Reprovado"
}
console.log(resultado)
*/
//Switch
//O switch é útil quando você tem múltiplos valores para comparar com a mesma variável
const fruta = "maçã";
switch (fruta) {
    case "banana":
        console.log("Banana é rica em potássio.");
        break;
    case "maçã":
        console.log("Maçã ajuda na digestão.");
        break;
    case "laranja":
        console.log("Laranja tem muita vitamina C.");
        break;
    default:
        console.log("Fruta desconhecida.");
}
//Criando um menu no terminal com e switch readline-sync
//Você pode criar menus interativos no terminal usando a biblioteca .readline-sync
const readline = __importStar(require("readline-sync"));
console.log("=== MENU PRINCIPAL  ===");
console.log("1 - Olá");
console.log("2 - Sobre");
console.log("3 - Sair");
//question é uma função pronta da biblioteca readline-sync
//ela impirme no terminal o que pedimos, e espera o usuario digitar algo
//quando ela digita, a variavel opcao recebe como valor o que o usuario digitou
const opcao = readline.question("Escolha uma opção: ");
switch (opcao) {
    case "1":
        console.log("Olá! Seja bem-vindo!");
        break;
    case "2":
        console.log("Este é um exemplo de menu com switch.");
        break;
    case "3":
        console.log("Saindo...");
        break;
    default:
        console.log("Opção inválida.");
}
//Exercicios
const chuva = false;
if (chuva) {
    console.log("Levar o guarda-chuva!");
}
else {
    console.log("Bom dia para caminhar!");
}
//2
const nota = 10;
const final = nota >= 6 ? "Aprovado" : "Reprovado";
console.log(final);
