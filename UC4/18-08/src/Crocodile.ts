import { Animal } from "./Animal";

export class Crocodile extends Animal{

    constructor(name:string, weight:number){
        super(name, weight)
    }
    swin():void{
        console.log(`${this.name} is swining.`)
    }
}