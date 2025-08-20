"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const ContaBancaria_1 = require("./ContaBancaria");
class ContaPoupanca extends ContaBancaria_1.ContaBancaria {
    constructor(saldo) {
        super(saldo);
    }
    aplicarJuros(juros) {
        this.atualizarSaldo(juros);
    }
}
exports.ContaPoupanca = ContaPoupanca;
