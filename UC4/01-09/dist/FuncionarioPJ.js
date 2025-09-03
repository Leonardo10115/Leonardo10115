"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioPJ = void 0;
const Funcionarios_1 = require("./Funcionarios");
class FuncionarioPJ extends Funcionarios_1.Funcionarios {
    constructor(nome, salario) {
        super(nome);
        this.salario = salario;
    }
    calcularSalario() {
        return this.salario * 220;
    }
}
exports.FuncionarioPJ = FuncionarioPJ;
