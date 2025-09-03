"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioCLT = void 0;
const Funcionarios_1 = require("./Funcionarios");
class FuncionarioCLT extends Funcionarios_1.Funcionarios {
    constructor(nome, salario) {
        super(nome);
        this.salario = salario;
    }
    calcularSalario() {
        console.log(this.salario);
    }
}
exports.FuncionarioCLT = FuncionarioCLT;
