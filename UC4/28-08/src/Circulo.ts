import { IFormaGeometrica } from "./IFormaGeometrica";

export class Circulo implements IFormaGeometrica {
        raio: number

        constructor(raio: number){
            this.raio = raio
        }
        calcularArea(): number {
            return this.raio*this.raio*3.14
        }
}