import { Animal } from "./Animal"


//Usamos a palavra reservada 'extends' para identificar que uma classe é filha de outra
 export class Dog extends Animal {
    // Dog, como é filho da classse Animal, ja herda os atributos 'name' e 'weight'

    constructor(name:string, weight:number) {
        super(name, weight)
        //super e usado para convocar o construtor do pai. Assim reutilizando ele na classe filha
    }

    bark():void{
        console.log(`${this.name} is barking.`)
    }
    
}
