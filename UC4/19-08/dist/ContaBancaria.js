"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }
    atualizarSaldo(novoSaldo) {
        console.log(`Saldo ${this.saldo += novoSaldo}`);
    }
}
exports.ContaBancaria = ContaBancaria;
//Outro método de usar
//  protected atualizarSaldo(novoSaldo:number):void{ 
//   this.saldo += novoSaldo
