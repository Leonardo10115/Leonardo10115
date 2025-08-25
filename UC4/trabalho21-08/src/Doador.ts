import { Pessoa } from "./Pessoa";// Extensão da classe Mãe

export class Doador extends Pessoa{
    // Novos atributos da classe filha
    protected tiposanguineo:string
    protected dataultimadoacao: string
    //Inicia os atributos herdados e criados nesta classe 
    constructor(Nome:string ,Idade:number, Peso:number, tipoSanguineo:string, dataUltimaDoacao:string){
        super(Nome, Idade, Peso)
        this.tiposanguineo = tipoSanguineo
        this.dataultimadoacao = dataUltimaDoacao
    }
    //Mostra as informações herdadas da classe mãe e criadas na classe filha
    mostraInfo(): void {
        console.log(`nome: ${this.nome}, idade: ${this.idade}, peso: ${this.peso}, tiposanguineo: ${this.tiposanguineo}, dataultimadoacao: ${this.dataultimadoacao}`)
    }
    // GET e SET desta classe
    getTipoSanguineo(): string{
        return this.tiposanguineo
    }
    setTipoSanguineo(novoTipoSanguineo:string):void{
        this.tiposanguineo = novoTipoSanguineo
    }
    getDataUltimaDoacao(): string{
        return this.dataultimadoacao
    }
    setDataUltimaDoacao(novaDataUltimaDoacao:string): void{
          this.dataultimadoacao = novaDataUltimaDoacao
    }
}