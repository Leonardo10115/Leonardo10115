"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(Classe, Nome, Vida, Forca) {
        this.nome = Nome;
        this.vida = Vida;
        this.forca = Forca;
        this.classe = Classe;
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    getClasse() {
        return this.classe;
    }
    setClasse(novaClasse) {
        this.classe = novaClasse;
    }
    getVida() {
        return this.vida;
    }
    setVida(novaVida) {
        this.vida = novaVida;
    }
    getForca() {
        return this.forca;
    }
    setForca(novaForca) {
        this.forca = novaForca;
    }
    atacar(Goblim) {
        Goblim.dano(this);
        console.log("Você atacou o monstro mais apanhou tambem");
    }
    dano(Goblim) {
        this.vida = this.vida - Goblim.getForca();
    }
    curar() {
        if (this.vida < 100) {
            return `Vida do personagem ${this.vida = this.vida + 10}`;
        }
        else {
            console.log("Não pode curar mais.");
        }
    }
}
exports.Personagem = Personagem;
