import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo{

    constructor(velocidade:number){
        super(velocidade)
    }
    acelerar(novaVelocidade:number) {
        this.velocidade = novaVelocidade
        console.log(`Nova velocidade: ${this.velocidade}`)
    }

}

