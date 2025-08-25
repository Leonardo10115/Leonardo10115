//Cria a classe Pessoa, tem que ser digitado igual foi criada
export class Pessoa{
    // Atributos da classe
    nome:string
    idade:number
    peso:number
     //Inicia os atributos criados da classe
    constructor(Nome:string, Idade:number, Peso:number){
        this.nome = Nome
        this.idade = Idade
        this.peso = Peso
    }
    // Mostra todas as informções da "Pessoa"
    mostraInfo():void{
        console.log(`nome: ${this.nome}, idade: ${this.idade}, peso: ${this.peso}`)
    }
    // Get e Set de cada atributo da classe Mãe
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