import { Funcionarios } from "./Funcionarios"

 export class FuncionarioPJ extends Funcionarios{
    salario:number

    constructor(nome:string, salario:number){
        super(nome)
        this.salario = salario
    }
    calcularSalario(): number {
        return this.salario*220
    }
}