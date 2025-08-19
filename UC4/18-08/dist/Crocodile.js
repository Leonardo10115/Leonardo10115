"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crocodile = void 0;
const Animal_1 = require("./Animal");
class Crocodile extends Animal_1.Animal {
    constructor(name, weight) {
        super(name, weight);
    }
    swin() {
        console.log(`${this.name} is swining.`);
    }
}
exports.Crocodile = Crocodile;
