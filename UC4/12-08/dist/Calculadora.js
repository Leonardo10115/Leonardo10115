"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(numero1, numero2) {
        this.numeroUM = numero1;
        this.numeroDois = numero2;
    }
    somar() {
        return this.numeroUM + this.numeroDois;
    }
    subtrair() {
        return this.numeroUM - this.numeroDois;
    }
    multiplicar() {
        return this.numeroUM * this.numeroDois;
    }
    dividir() {
        return this.numeroUM / this.numeroDois;
    }
}
exports.Calculadora = Calculadora;
