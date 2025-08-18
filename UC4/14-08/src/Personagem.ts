import { Monstro } from "./Monstro"
export class Personagem {
    private classe:string
    private nome:string
    private vida:number
    private forca:number

    constructor(Classe:string, Nome:string, Vida:number, Forca:number){
        this.nome = Nome
        this.vida = Vida
        this.forca = Forca
        this.classe = Classe
     }
     getNome():string{
        return this.nome
     }
     setNome(novoNome:string):void{
        this.nome = novoNome
     }
     getClasse():string{
        return this.classe
     }
     setClasse(novaClasse:string):void{
        this.classe = novaClasse
     }
     getVida():number {
        return this.vida
     }
     setVida(novaVida:number):void{
        this.vida = novaVida
     }
     getForca():number {
        return this.forca
     }
     setForca(novaForca:number):void{
        this.forca = novaForca
     }
     atacar(Goblim:Monstro){
        Goblim.dano(this)
        console.log("Você atacou o monstro mais apanhou tambem")
     }
     dano(Goblim:Monstro):void{
        this.vida = this.vida - Goblim.getForca()
     }
     curar(){
        if(this.vida < 100){
    return `Vida do personagem ${this.vida = this.vida + 10}`
        }else{
            console.log("Não pode curar mais.")
        }
     }
}