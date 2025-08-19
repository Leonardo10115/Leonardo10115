"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}
exports.Animal = Animal;
