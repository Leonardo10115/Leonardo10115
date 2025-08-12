"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
// A classe funciona como um 'molde' para um tipo de dado
//Export permite que importemos depois esta classe em qualquer lugar do meu projeto
//A palavra 'Class' indica que isso é uma classe
//Depois de 'class' , colocamos o nome da classe, que deve ser EXATAMENTE igual ao nome do arquivo
class Cachorro {
    //Constructor da classe (Função/método que é chamado AUTOMATICAMENTE quando crio um objeto a partir desta Classe). É nele que eu defino os valores que este objeto vai ter para seus atributos
    constructor(nomeCachorro, racaCachorro, idadeCachorro) {
        //O atributo 'nome' desta classe vai receber como valor o que o usuario digitar(nomeCachorro)
        this.nome = nomeCachorro;
        this.raca = racaCachorro;
        this.idade = idadeCachorro;
    }
    //Métodos (coisas que objetos data classe FAZEM)
    //Não usamos a palavra 'function'
    latir() {
        console.log(`O cachorro de nome ${this.nome} está latindo.`);
    }
    correr() {
        console.log(`O cachorro de raça ${this.raca} está correndo.`);
    }
}
exports.Cachorro = Cachorro;
