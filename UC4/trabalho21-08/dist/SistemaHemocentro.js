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
// Importação da classe mãe e classe filha
const Doador_1 = require("./Doador");
const readline = __importStar(require("readline-sync"));
class SistemaHemocentro {
    constructor() {
        // Atributo desta classe
        this.doadores = [new Doador_1.Doador("Pedro", 25, 60, "A+", "20.01.2022")];
    }
    // Função para cadastrar os doadores
    cadastrarDoador() {
        // Perguntas sobre o doador
        const nomeUsuario = readline.question("Nome: ");
        const idadeUsuario = Number(readline.question("Idade: "));
        const pesoUsuario = Number(readline.question("Peso: "));
        const TiposanguineoUsuario = readline.question("Tipo sanguineo: ");
        const UltimaDoacaoUsuario = readline.question("Ultima doação: ");
        const novoUsuario = new Doador_1.Doador(nomeUsuario, idadeUsuario, pesoUsuario, TiposanguineoUsuario, UltimaDoacaoUsuario);
        // Coloca estas informações dentro do Array "doadores"
        this.doadores.push(novoUsuario);
    }
    // Função para buscar o doador pelo tipo sanguineo
    buscarPorTipoSanguineo() {
        //Pergunta qual é o tipo sanguineo desejado
        const Pergunta = readline.question("Digite o tipo sanguine desajado: ");
        console.log(`------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`);
        // For que percorre todo o Array e verifica se o tipo sanguineo está dentro dele
        for (let i = 0; i < this.doadores.length; i++) {
            if (Pergunta == this.doadores[i].getTipoSanguineo()) {
                console.log(`
${this.doadores[i].getNome()}     |  ${this.doadores[i].getPeso()}    |  ${this.doadores[i].getIdade()}   |      ${this.doadores[i].getTipoSanguineo()}         |   ${this.doadores[i].getDataUltimaDoacao()}   
-----------------------------------------------------------------`);
            }
            else {
                console.log(i--, "Tipo sanguineo não encontrado");
            }
        }
    }
    // Função para buscar o doador pela data da ultima doação
    buscarPorDataUltimaDoacao() {
        // Pergunta ao usuario a data desejada
        const Pergunta = readline.question("Digite uma data: ");
        console.log(`------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`);
        //Percorre todo o Array e verifica se a data desejada tem dentro de "doadores"
        for (let i = 0; i < this.doadores.length; i++) {
            if (Pergunta === this.doadores[i].getDataUltimaDoacao()) {
                console.log(`
${this.doadores[i].getNome()}     |  ${this.doadores[i].getPeso()}    |  ${this.doadores[i].getIdade()}   |      ${this.doadores[i].getTipoSanguineo()}         |   ${this.doadores[i].getDataUltimaDoacao()}   
-----------------------------------------------------------------`);
            }
            else {
                console.log("Data não encontrada! Tente novamente");
            }
        }
    }
    // Função que lista todos os doadores que já estão cadastrados
    listadeDoadores() {
        console.log(`--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`);
        //For que percorre todo o Array
        for (let i = 0; i < this.doadores.length; i++) {
            console.log(`
${this.doadores[i].getNome()}    |  ${this.doadores[i].getIdade()}   |  ${this.doadores[i].getPeso()}  |     ${this.doadores[i].getTipoSanguineo()}        |   ${this.doadores[i].getDataUltimaDoacao()} 
-----------------------------------------------------------------`);
        }
    }
}
exports.SistemaHemocentro = SistemaHemocentro;
