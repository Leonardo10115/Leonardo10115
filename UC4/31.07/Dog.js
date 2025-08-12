"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    // O constructor é um método chamado automaticamente quando criamos um objeto a partir dessa classe.
    // Nele, normalmente passar valores para os atributos
    function Dog(dogName, dogWeight, dogBreed) {
        this.name = dogName;
        this.weight = dogWeight;
        this.breed = dogBreed;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " is barking."));
    };
    Dog.prototype.eat = function () {
        console.log("the ".concat(this.breed, " dog is eating."));
    };
    return Dog;
}());
exports.Dog = Dog;
