import { Cachorro } from "./Cachorro";
import { Calculadora } from "./Calculadora";

//Para poder criar um objeto da nossa classe "Cachorro", primeiro criamos uma variavel que deve ser do tipo cachorro
//Depois atribuimos valor a esta variavel usando a palavra reservada 'new' seguida do  nome da classe junto de. Assim chamamos o construtor da classe e devemos, dentro dos parenteses, passar TODOS os valores que nos definimos.

//Quando criamosum objeto, chamamos isso de INSTANCIAR O OBJETO DA CLASSE
const meuCachorro:Cachorro = new Cachorro("Ted", "Golden", 7)
const algumCachorro:Cachorro = new Cachorro("Tobby", "vira-lata", 4)

//Para chamarmos os métodos destes objetos, chamamos o nome da variavel + . + o nome do método + ()
meuCachorro.correr()
meuCachorro.latir()

algumCachorro.correr()
algumCachorro.latir()

//Para acessarmos o valor do atributo de um objeto, chamamos o nome da variavel + . + o nome do atributo
console.log(algumCachorro.idade)

//Para trocar o valor de um atributo de um objeto, chamamos o nome + . + o nome do atributo, depois '=' é passado o novo valor
meuCachorro.nome = "Tedin"
console.log(meuCachorro.nome)

//Crie um novo arquivo chamado Calculadora
// dentro desse arquivo crie a classe Calculadora
//crie os atributos numeroUm e numeroDois
//depois, faça os métodos somar, subtrair, multiplicar e dividir
//Após isso, NO ARQUIVO 'index.ts', instacie a calculadora e chame seus métodos

const minhaCalculadora:Calculadora = new Calculadora(5,11)
console.log(minhaCalculadora.somar())
console.log(minhaCalculadora.subtrair())
console.log(minhaCalculadora.multiplicar())
console.log(minhaCalculadora.dividir())
