"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Crocodile_1 = require("./Crocodile");
const Dog_1 = require("./Dog");
const Owl_1 = require("./Owl");
//Assim eu crio um objeto do tipo cachorro
const myDog = new Dog_1.Dog("Bob", 10);
//Assim eu vejo o nome do cachorro
console.log(myDog.name);
//Assim eu vejo o nome do cachorro
console.log(myDog.weight);
//Assim eu vejo o peso do cachorro
myDog.bark();
myDog.eat();
//Assim eu chamo os dois métodosdo cachorro
const myOwl = new Owl_1.Owl("Jane", 6);
console.log(myOwl.name);
console.log(myOwl.weight);
myOwl.fly();
myOwl.eat();
const myCrocodile = new Crocodile_1.Crocodile("Billy", 20);
console.log(myCrocodile.name);
console.log(myCrocodile.weight);
myCrocodile.swin();
myCrocodile.eat();
