// A classe funciona como um 'molde' para um tipo de dado
//Export permite que importemos depois esta classe em qualquer lugar do meu projeto
//A palavra 'Class' indica que isso é uma classe
//Depois de 'class' , colocamos o nome da classe, que deve ser EXATAMENTE igual ao nome do arquivo
export class Cachorro {
//Atributos (coisas que objetos desta calsse TÊM)
    nome:string
    raca:string
    idade:number

//Constructor da classe (Função/método que é chamado AUTOMATICAMENTE quando crio um objeto a partir desta Classe). É nele que eu defino os valores que este objeto vai ter para seus atributos
    constructor(nomeCachorro:string, racaCachorro:string, idadeCachorro:number){
        //O atributo 'nome' desta classe vai receber como valor o que o usuario digitar(nomeCachorro)
        this.nome = nomeCachorro
        this.raca = racaCachorro
        this.idade = idadeCachorro   
    }
//Métodos (coisas que objetos data classe FAZEM)
//Não usamos a palavra 'function'
    latir():void{
    console.log(`O cachorro de nome ${this.nome} está latindo.`)
    }

    correr():void{
        console.log(`O cachorro de raça ${this.raca} está correndo.`)
    }
}