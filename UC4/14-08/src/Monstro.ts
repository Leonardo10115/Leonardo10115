import { Personagem } from "./Personagem"
export class Monstro {
   private forca:number
   private vida:number
   private nome:string

   constructor(Forca:number, Vida:number, Nome:string){
      this.forca = Forca
      this.vida = Vida
      this.nome = Nome
     }
     getForca():number{
        return this.forca
     }
     setForca(novaForca:number):void{
        this.forca = novaForca
     }
     getVida():number{
        return this.vida
     }
     setVida(novaVida:number):void{
        this.vida = novaVida
     }
     getNome():string{
        return this.nome
     }
     setNome(novoNome:string):void{
        this.nome = novoNome
     }
     atacar(personagem:Personagem){
        personagem.dano(this)
     }
     dano(personagem:Personagem):void{
        this.vida = this.vida - personagem.getForca()
     }
}