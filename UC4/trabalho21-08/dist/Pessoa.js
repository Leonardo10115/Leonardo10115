"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
//Cria a classe Pessoa, tem que ser digitado igual foi criada
class Pessoa {
    //Inicia os atributos criados da classe
    constructor(Nome, Idade, Peso) {
        this.nome = Nome;
        this.idade = Idade;
        this.peso = Peso;
    }
    mostraInfo() {
        console.log(`nome: ${this.nome}, idade: ${this.idade}, peso: ${this.peso}`);
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(novaIdade) {
        this.idade = novaIdade;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(novoPeso) {
        this.peso = novoPeso;
    }
}
exports.Pessoa = Pessoa;
