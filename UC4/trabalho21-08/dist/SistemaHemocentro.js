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
exports.SistemaHemocentro = void 0;
const Doador_1 = require("./Doador");
const Pessoa_1 = require("./Pessoa");
const readline = __importStar(require("readline-sync"));
class SistemaHemocentro extends Pessoa_1.Pessoa {
    constructor(Nome, Idade, Peso, doadores = []) {
        super(Nome, Idade, Peso);
        this.doadores = [];
        this.doadores = doadores;
    }
    cadastrarDoador() {
        const nomeUsuario = readline.question("Nome: ");
        const idadeUsuario = Number(readline.question("Idade: "));
        const pesoUsuario = Number(readline.question("Peso: "));
        const TiposanguineoUsuario = readline.question("Tipo sanguineo: ");
        const UltimaDoacaoUsuario = readline.question("Ultima doação: ");
        const novoUsuario = new Doador_1.Doador(nomeUsuario, idadeUsuario, pesoUsuario, TiposanguineoUsuario, UltimaDoacaoUsuario);
        this.doadores.push(novoUsuario);
    }
    buscarPorTipoSanguineo() {
        const Pergunta = readline.question("Digite o tipo sanguine desajado: ");
        console.log(`------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`);
        for (let i = 0; i < this.doadores.length; i++) {
            if (Pergunta == this.doadores[i].getTipoSanguineo()) {
                console.log(`
${this.doadores[i].getNome()}     |  ${this.doadores[i].getPeso()}    |  ${this.doadores[i].getIdade()}   |      ${this.doadores[i].getTipoSanguineo()}         |   ${this.doadores[i].getDataUltimaDoacao()}   
-----------------------------------------------------------------`);
            }
            else {
            }
        }
    }
    buscarPorDataUltimaDoacao() {
        const Pergunta = readline.question("Digite uma data: ");
        console.log(`------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`);
        for (let i = 0; i < this.doadores.length; i++) {
            if (Pergunta === this.doadores[i].getDataUltimaDoacao()) {
                console.log(`
${this.doadores[i].getNome()}     |  ${this.doadores[i].getPeso()}    |  ${this.doadores[i].getIdade()}   |      ${this.doadores[i].getTipoSanguineo()}         |   ${this.doadores[i].getDataUltimaDoacao()}   
-----------------------------------------------------------------`);
            }
        }
    }
    listadeDoadores() {
        console.log(`--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`);
        for (let i = 0; i < this.doadores.length; i++) {
            console.log(`
${this.doadores[i].getNome()}    |  ${this.doadores[i].getIdade()}   |  ${this.doadores[i].getPeso()}  |     ${this.doadores[i].getTipoSanguineo()}        |   ${this.doadores[i].getDataUltimaDoacao()} 
-----------------------------------------------------------------`);
        }
    }
    primeiroDoador() {
        const primeiroDoador = new Doador_1.Doador("Pedro", 25, 60, "A+", "20.01.2022");
        this.doadores.push(primeiroDoador);
    }
}
exports.SistemaHemocentro = SistemaHemocentro;
