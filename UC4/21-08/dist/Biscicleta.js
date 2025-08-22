"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biscicleta = void 0;
const Veiculo_1 = require("./Veiculo");
class Biscicleta extends Veiculo_1.Veiculo {
    mover() {
        console.log(`A biscicleta esta se movendo.`);
    }
}
exports.Biscicleta = Biscicleta;
