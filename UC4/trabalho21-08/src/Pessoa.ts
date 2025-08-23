//Cria a classe Pessoa, tem que ser digitado igual foi criada
export class Pessoa{
    //
    nome:string
    idade:number
    peso:number
     //Inicia os atributos criados da classe
    constructor(Nome:string, Idade:number, Peso:number){
        this.nome = Nome
        this.idade = Idade
        this.peso = Peso
    }
    mostraInfo():void{
        console.log(`nome: ${this.nome}, idade: ${this.idade}, peso: ${this.peso}`)
    }

    getNome():string{
        return this.nome
     }
     setNome(novoNome:string):void{
        this.nome = novoNome
    }
    getIdade():number{
        return this.idade
    }
    setIdade(novaIdade:number):void{
        this.idade = novaIdade
    }
    getPeso():number{
        return this.peso
    }
    setPeso(novoPeso:number):void{
        this.peso = novoPeso
    }
    
}