"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circulo_1 = require("./Circulo");
const Quadrado_1 = require("./Quadrado");
//Aqui criamos um objeto do tipo IUsuario, ou seja,
//um objeto que SEGUE as REGRAS da interface que criamos
const meuIUsuario = {
    nome: "Leo",
    idade: 16,
};
console.log(meuIUsuario.idade);
function mostrarProduto(produto) {
    console.log(`${produto.nome} custa R$ ${produto.preco}`);
}
const produto = {
    nome: "Camiseta",
    preco: 99.99
};
mostrarProduto(produto);
//mostrarProduto((nome:"Tenis", preco:120.00))
/*const livro1:ILivro = {
    titulo: "",
    autor: "",
    anoPublicacao: 2009,
    disponivel: true
}
console.log(livro1.anoPublicacao)

function mostrarLivro(livro1: ILivro):void{
    console.log(`Titulo:${livro1.titulo},
                \nAutor:${livro1.autor},
                \nAnoPublicado:${livro1.anoPublicacao},
                \nDisponivel:${livro1.disponivel}`)
}
console.log(mostrarLivro)*/
const funcionario = {
    nome: "hjsdhgjk",
    cargo: "FJKH",
    salario: 3000
};
function calcularBonus(funcionario) {
    let bonus = funcionario.salario * 0.1;
    console.log(`O salario do funcionario é ${funcionario.salario + bonus}.`);
}
calcularBonus(funcionario);
//function calcularBonus(funcionario:IFuncionario):number{
//return funcionario.salario * 0.1    
//}
const meuQuadrado = new Quadrado_1.Quadrado(6);
const meuCirculo = new Circulo_1.Circulo(7);
console.log(`Area do quadrado é ${meuQuadrado.calcularArea()}`);
console.log(`Area do circulo é ${meuCirculo.calcularArea()}`);
