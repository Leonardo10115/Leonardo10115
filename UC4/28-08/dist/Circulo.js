"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return this.raio * this.raio * 3.14;
    }
}
exports.Circulo = Circulo;
