
//Variaveis

import { Dog } from "./Dog"

//String
let nome:string = "leonardo"

//Number
let idade:number = 50

// Boolean
let deMaior:boolean = true

//--------------------------------------------------------------------

//Arrays
let numeros: Array<number> = [1,2,3]
let nomes: string[] = ['Leo', 'Pedro', 'Arthur']

//Objeto
let pessoa: {nome:string, idade:number} = {
    nome:"Leo",
    idade:50
}

//Função de tipagem number
function calcula(num:number, num2:number):number{
    return num + num2
}
console.log(calcula(200,40))

function mensagem(meuNome:string):string {
return `ola $(meuNome), tudobem com você?`

}
function frase():void {
    console.log("E ae")
}

//Função com parâmetros opcionais
function sayHello(name?: string): void {
    console.log("Hello,", name || "world")
}

sayHello()
sayHello("Leonardo")

function applyDiscount(price:number, discount:number = 0.05):number {
    return price * (1 - discount)
}

console.log(
    applyDiscount(100),
    applyDiscount(100,0.9)
)


let myDog:Dog = new Dog("Bob", 15, "Pitbull")
let myOtherDog:Dog = new Dog("Fido", 10, "Pincher")

//Assim eu acesso seus atributos
console.log(myDog.breed) //Pitbull
console.log(myOtherDog.name) // Fido

//Assim  eu chamo os métodos
myDog.bark()
myOtherDog.eat()