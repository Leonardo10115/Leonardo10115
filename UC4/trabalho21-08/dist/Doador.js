"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doador = void 0;
const Pessoa_1 = require("./Pessoa"); // Extensão da classe Mãe
class Doador extends Pessoa_1.Pessoa {
    //Inicia os atributos herdados e criados nesta classe 
    constructor(Nome, Idade, Peso, tipoSanguineo, dataUltimaDoacao) {
        super(Nome, Idade, Peso);
        this.tiposanguineo = tipoSanguineo;
        this.dataultimadoacao = dataUltimaDoacao;
    }
    //Mostra as informações herdadas da classe mãe e criadas na classe filha
    mostraInfo() {
        console.log(`nome: ${this.nome}, idade: ${this.idade}, peso: ${this.peso}, tiposanguineo: ${this.tiposanguineo}, dataultimadoacao: ${this.dataultimadoacao}`);
    }
    // GET e SET desta classe
    getTipoSanguineo() {
        return this.tiposanguineo;
    }
    setTipoSanguineo(novoTipoSanguineo) {
        this.tiposanguineo = novoTipoSanguineo;
    }
    getDataUltimaDoacao() {
        return this.dataultimadoacao;
    }
    setDataUltimaDoacao(novaDataUltimaDoacao) {
        this.dataultimadoacao = novaDataUltimaDoacao;
    }
}
exports.Doador = Doador;
