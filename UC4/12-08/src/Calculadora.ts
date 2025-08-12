export class Calculadora {
    numeroUM:number
    numeroDois:number

    constructor(numero1:number, numero2:number){
        this.numeroUM = numero1
        this.numeroDois = numero2
    }
somar():number{
    return this.numeroUM + this.numeroDois
}
subtrair():number{
    return this.numeroUM - this.numeroDois
}
multiplicar():number{
    return this.numeroUM * this.numeroDois
}
dividir():number{
    return this.numeroUM / this.numeroDois
}
}