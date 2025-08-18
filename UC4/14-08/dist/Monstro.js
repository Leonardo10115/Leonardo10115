"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = void 0;
class Monstro {
    constructor(Forca, Vida, Nome) {
        this.forca = Forca;
        this.vida = Vida;
        this.nome = Nome;
    }
    getForca() {
        return this.forca;
    }
    setForca(novaForca) {
        this.forca = novaForca;
    }
    getVida() {
        return this.vida;
    }
    setVida(novaVida) {
        this.vida = novaVida;
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    atacar(personagem) {
        personagem.dano(this);
    }
    dano(personagem) {
        this.vida = this.vida - personagem.getForca();
    }
}
exports.Monstro = Monstro;
