import { Animal } from "./Animal"
import { Crocodile } from "./Crocodile"
import { Dog } from "./Dog"
import { Owl } from "./Owl"
//Assim eu crio um objeto do tipo cachorro

const myDog:Dog = new Dog("Bob", 10)
//Assim eu vejo o nome do cachorro
console.log(myDog.name)
//Assim eu vejo o nome do cachorro
console.log(myDog.weight)
//Assim eu vejo o peso do cachorro
myDog.bark()
myDog.eat()
//Assim eu chamo os dois métodosdo cachorro
const myOwl:Owl = new Owl("Jane", 6)

console.log(myOwl.name)
console.log(myOwl.weight)

myOwl.fly()
myOwl.eat()

const myCrocodile:Crocodile = new Crocodile("Billy", 20)

console.log(myCrocodile.name)
console.log(myCrocodile.weight)

myCrocodile.swin()
myCrocodile.eat()

let animais:Animal[] = [myCrocodile, myOwl, myDog]
for(let i = 0; i < animais.length; i++){
    animais[i].eat()
}
   
    