import { Doador } from "./Doador";
import { Pessoa } from "./Pessoa";
import * as readline from 'readline-sync';
export class SistemaHemocentro extends Pessoa {
    private doadores: Doador[] = []

    constructor(Nome: string, Idade: number, Peso: number, doadores: Doador[] = []) {
        super(Nome, Idade, Peso)
        this.doadores = doadores
    }

    cadastrarDoador(): void {
        const nomeUsuario = readline.question("Nome: ")
        const idadeUsuario = Number(readline.question("Idade: "))
        const pesoUsuario = Number(readline.question("Peso: "))
        const TiposanguineoUsuario = readline.question("Tipo sanguineo: ")
        const UltimaDoacaoUsuario = readline.question("Ultima doação: ")
        const novoUsuario: Doador = new Doador(nomeUsuario, idadeUsuario, pesoUsuario, TiposanguineoUsuario, UltimaDoacaoUsuario)
        this.doadores.push(novoUsuario)
        
    }
    buscarPorTipoSanguineo(): void {
        const Pergunta = readline.question("Digite o tipo sanguine desajado: ")
        for (let i = 0; i < this.doadores.length; i++) {
            
           
            if (Pergunta == this.doadores[i].getTipoSanguineo()) {
                console.log(`------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
${this.doadores[i].getNome()}     |  ${this.doadores[i].getPeso()}    |  ${this.doadores[i].getIdade()}   |      ${this.doadores[i].getTipoSanguineo()}         |   ${this.doadores[i].getDataUltimaDoacao()}   
-----------------------------------------------------------------`)
            } else {

            }
        }
    }
    buscarPorDataUltimaDoacao(): void {
        const Pergunta = readline.question("Digite uma data: ")
        for (let i = 0; i < this.doadores.length; i++) {
            if (Pergunta === this.doadores[i].getDataUltimaDoacao()) {
                console.log(`------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
${this.doadores[i].getNome()}     |  ${this.doadores[i].getPeso()}    |  ${this.doadores[i].getIdade()}   |      ${this.doadores[i].getTipoSanguineo()}         |   ${this.doadores[i].getDataUltimaDoacao()}   
-----------------------------------------------------------------`)
            }
        }
    }
    listadeDoadores(): void {
        for(let i = 0; i < this.doadores.length; i++){
        console.log(`--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
${this.doadores[i].getNome()}    |  ${this.doadores[i].getIdade()}   |  ${this.doadores[i].getPeso()}  |     ${this.doadores[i].getTipoSanguineo()}        |   ${this.doadores[i].getDataUltimaDoacao()} 
-----------------------------------------------------------------`)}
    }
}