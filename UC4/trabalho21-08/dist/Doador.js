"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doador = void 0;
const Pessoa_1 = require("./Pessoa");
class Doador extends Pessoa_1.Pessoa {
    constructor(Nome, Idade, Peso, tipoSanguineo, dataUltimaDoacao) {
        super(Nome, Idade, Peso);
        this.tiposanguineo = tipoSanguineo;
        this.dataultimadoacao = dataUltimaDoacao;
    }
    mostraInfo() {
        console.log(`nome: ${this.nome}, idade: ${this.idade}, peso: ${this.peso}, tiposanguineo: ${this.tiposanguineo}, dataultimadoacao: ${this.dataultimadoacao}`);
    }
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
