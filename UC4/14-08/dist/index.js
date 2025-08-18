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
const Personagem_1 = require("./Personagem");
const Monstro_1 = require("./Monstro");
const readline = __importStar(require("readline-sync"));
const personagem = new Personagem_1.Personagem("Leo", "Mago", 100, 50);
const monstro = new Monstro_1.Monstro(20, 150, "Goblim");
const nomePersonagem = readline.question("Qual o nome do seu Personagem?");
const nomeClasse = readline.question("Qual a sua classe?");
personagem.setNome(nomePersonagem);
personagem.setClasse(nomeClasse);
let opcao = "";
do {
    console.log("Escolha uma ação: ");
    console.log("1 - Atacar");
    console.log("2 - Curar");
    console.log("3 - Fugir");
    opcao = readline.question("Escolha uma opção: ");
    switch (opcao) {
        case "1":
            personagem.atacar(monstro);
            monstro.atacar(personagem);
            console.log(`${personagem.getNome()} esta com ${personagem.getVida()} de vida`);
            console.log(`${monstro.getNome()} está com ${monstro.getVida()} de vida`);
            break;
        case "2":
            console.log(personagem.curar());
            break;
        case "3":
            console.log("Você fugiu da batalha!");
    }
} while (opcao !== "3" && personagem.getVida() > 0 && monstro.getVida() > 0);
if (personagem.getVida() === 0) {
    console.log("Você morreu!");
}
if (monstro.getVida() === 0) {
    console.log("Parabens, você venceu o monstro");
}
