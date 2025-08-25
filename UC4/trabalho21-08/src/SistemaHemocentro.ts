// Importação da classe mãe e classe filha
import { Doador } from "./Doador";
import { Pessoa } from "./Pessoa";
import * as readline from 'readline-sync';
export class SistemaHemocentro extends Pessoa {
    // Atributo desta classe
    private doadores: Doador[] = []

    constructor(Nome: string, Idade: number, Peso: number, doadores: Doador[] = []) {
        super(Nome, Idade, Peso)
        this.doadores = doadores
    }
// Função para cadastrar os doadores
    cadastrarDoador(): void {
        // Perguntas sobre o doador
        const nomeUsuario = readline.question("Nome: ")
        const idadeUsuario = Number(readline.question("Idade: "))
        const pesoUsuario = Number(readline.question("Peso: "))
        const TiposanguineoUsuario = readline.question("Tipo sanguineo: ")
        const UltimaDoacaoUsuario = readline.question("Ultima doação: ")
        const novoUsuario: Doador = new Doador(nomeUsuario, idadeUsuario, pesoUsuario, TiposanguineoUsuario, UltimaDoacaoUsuario)
        // Coloca estas informações dentro do Array "doadores"
        this.doadores.push(novoUsuario)
        
        
    }
// Função para buscar o doador pelo tipo sanguineo
    buscarPorTipoSanguineo(): void {
        //Pergunta qual é o tipo sanguineo desejado
        const Pergunta = readline.question("Digite o tipo sanguine desajado: ")
        console.log(`------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`)
        // For que percorre todo o Array e verifica se o tipo sanguineo está dentro dele
        for (let i = 0; i < this.doadores.length; i++) {
            if (Pergunta == this.doadores[i].getTipoSanguineo()) {
                console.log(`
${this.doadores[i].getNome()}     |  ${this.doadores[i].getPeso()}    |  ${this.doadores[i].getIdade()}   |      ${this.doadores[i].getTipoSanguineo()}         |   ${this.doadores[i].getDataUltimaDoacao()}   
-----------------------------------------------------------------`)
            } else {
                console.log("Tipo sanguineo não encontrado")
            }
        }
    }
// Função para buscar o doador pela data da ultima doação
    buscarPorDataUltimaDoacao(): void {
        // Pergunta ao usuario a data desejada
        const Pergunta = readline.question("Digite uma data: ")
        console.log(`------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`)
        //Percorre todo o Array e verifica se a data desejada tem dentro de "doadores"
        for (let i = 0; i < this.doadores.length; i++) {
            if (Pergunta === this.doadores[i].getDataUltimaDoacao()) {
                console.log(`
${this.doadores[i].getNome()}     |  ${this.doadores[i].getPeso()}    |  ${this.doadores[i].getIdade()}   |      ${this.doadores[i].getTipoSanguineo()}         |   ${this.doadores[i].getDataUltimaDoacao()}   
-----------------------------------------------------------------`)
            }
        }
    }
// Função que lista todos os doadores que já estão cadastrados
    listadeDoadores(): void {
        
        console.log(`--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`)
        //For que percorre todo o Array
        for(let i = 0; i < this.doadores.length; i++){
        console.log(`
${this.doadores[i].getNome()}    |  ${this.doadores[i].getIdade()}   |  ${this.doadores[i].getPeso()}  |     ${this.doadores[i].getTipoSanguineo()}        |   ${this.doadores[i].getDataUltimaDoacao()} 
-----------------------------------------------------------------`)}
    }
// Função para deixar um doador já cadastrado
    primeiroDoador(){
        const primeiroDoador:Doador = new Doador("Pedro", 25, 60, "A+", "20.01.2022")
        this.doadores.push(primeiroDoador)
    }

}

