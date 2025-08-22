import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo{

    constructor(velocidade:number){
        super(velocidade)
    }
    //Método
    acelerar(novaVelocidade:number) {
        this.velocidade = novaVelocidade
        console.log(`Nova velocidade: ${this.velocidade}`)
    }

}
//Outra forma de fazer.
// acelerar(){
// this.velocidade *= 1.1
//console.log(`O carro esta andando a ${this.velocidade.toFixed(2)} km/h`)
//}