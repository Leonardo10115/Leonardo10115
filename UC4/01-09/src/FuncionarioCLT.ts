import { Funcionarios } from "./Funcionarios"

export class FuncionarioCLT extends Funcionarios{
    salario:number

    constructor(nome:string, salario:number){
        super(nome)
        this.salario = salario   
     }
    calcularSalario():void {
        console.log(this.salario) 
    }
}