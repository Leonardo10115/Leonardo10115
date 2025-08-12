const idade = 18
const temCarteira = false

if (idade >= 18 && temCarteira) {
    console.log("Voce pode dirigir.")
} else if (idade >= 18 && !temCarteira){
    console.log("Voce é de maior mas nao tem carteira. Não pode dirigir.")
}else {
    console.log("Voce é menor de idade.")
}

const pontuacao = 85

const resultado = pontuacao >= 60 ? "Aprovado" : "Reprovado"

console.log(resultado)

//Mesmo resultado que teria codigo de cima porem ele e uma versao mais basica, se precisar de else, else if ele 
//nao sera usado
/*
const pontuacao = 85
let resultado
if(pontuacao >= 60) {
    resultado = "Aprovado"
}else {
    resultado = "Reprovado"
}
console.log(resultado)
*/

//Switch
//O switch é útil quando você tem múltiplos valores para comparar com a mesma variável
const fruta:string = "maçã"

switch (fruta) {
  case "banana":
    console.log("Banana é rica em potássio.")
    break
  case "maçã":
    console.log("Maçã ajuda na digestão.")
    break
  case "laranja":
    console.log("Laranja tem muita vitamina C.")
    break
  default:
    console.log("Fruta desconhecida.")
}

//Criando um menu no terminal com e switch readline-sync
//Você pode criar menus interativos no terminal usando a biblioteca .readline-sync
import * as readline from 'readline-sync'

console.log("=== MENU PRINCIPAL  ===")
console.log("1 - Olá")
console.log("2 - Sobre")
console.log("3 - Sair")
//question é uma função pronta da biblioteca readline-sync
//ela impirme no terminal o que pedimos, e espera o usuario digitar algo
//quando ela digita, a variavel opcao recebe como valor o que o usuario digitou

const opcao = readline.question("Escolha uma opção: ")

switch (opcao) {
    case "1":
        console.log("Olá! Seja bem-vindo!")
        break
      case "2":
        console.log("Este é um exemplo de menu com switch.")
        break
      case "3":
        console.log("Saindo...")
        break
      default:
        console.log("Opção inválida.")
}

//Exercicios

const chuva = false
if(chuva){
    console.log("Levar o guarda-chuva!")
}else{
    console.log("Bom dia para caminhar!")
}

//2
const nota = 10

const final = nota >= 6 ? "Aprovado" : "Reprovado"

console.log(final)

//3
const animal = "gato"

switch (animal) {
  case "":
    console.log("Au au")
    break
  case "gato":
    console.log("Miau")
    break
  default:
    console.log("animal desconhecido.")
}
  