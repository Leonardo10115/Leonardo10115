import { Forma } from "./Forma"

export class Retangulo extends Forma {
    base:number
    altura:number 
    

    constructor(base:number, altura:number){
        super()
        this.base = base
        this.altura = altura
    }
    calcularArea(): number {
        return this.base*this.altura
    }
}