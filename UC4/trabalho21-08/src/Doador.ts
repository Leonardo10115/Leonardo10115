import { Pessoa } from "./Pessoa";

export class Doador extends Pessoa{
    protected tiposanguineo:string
    protected dataultimadoacao: string

    constructor(Nome:string ,Idade:number, Peso:number, tipoSanguineo:string, dataUltimaDoacao:string){
        super(Nome, Idade, Peso)
        this.tiposanguineo = tipoSanguineo
        this.dataultimadoacao = dataUltimaDoacao
    }
    mostraInfo(): void {
        console.log(`nome: ${this.nome}, idade: ${this.idade}, peso: ${this.peso}, tiposanguineo: ${this.tiposanguineo}, dataultimadoacao: ${this.dataultimadoacao}`)
    }
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