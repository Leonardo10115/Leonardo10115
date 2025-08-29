function distanciaEntrePontos(x1, y1, x2, y2) {
    // Calcula a diferença entre as coordenadas x e y
    const diffX = x2 - x1;
    const diffY = y2 - y1;
  
    // Eleva as diferenças ao quadrado
    const quadradoDiffX = diffX * diffX;
    const quadradoDiffY = diffY * diffY;
  
    // Calcula a soma dos quadrados das diferenças
    const somaQuadrados = quadradoDiffX + quadradoDiffY;
  
    // Calcula a raiz quadrada da soma
    const distancia = Math.sqrt(somaQuadrados);
  
    // Retorna a distância
    return distancia;
  }
  
  // Exemplo de uso
  const ponto1X = 3;
  const ponto1Y = 4;
  const ponto2X = 7;
  const ponto2Y = 11;
  
  const distancia = distanciaEntrePontos(ponto1X, ponto1Y, ponto2X, ponto2Y);
  console.log("A distância entre os pontos é:", distancia);



  let tamanho = 5
  for(let i = 0; i <=tamanho; i++){
     console.log(i)
  }


  let numeros = [5, 7, 11, 10]
  let valor_menor = numeros[0]

  for(let numero of numeros){
    if(numero < valor_menor){
        valor_menor = numero
    }
  }
  console.log(valor_menor)

/////////////////////////////////////////////


  const numer = [10, 5, 11, 7];

  if(numeros.includes(22)){
    console.log("O numero 22 esta na lista.");
  } else {
    console.log("O numero 22 nao esta na lista.");
  }


let pilha_volta = ["1", "2", "3"];
pilha_avancar = [];

let elemento = pilha_voltar.pop();

pilha_avancar.push(elemento);

console.log("pilha_voltar:", pilha_voltar);
console.log("pilha_avancar:", pilha_avancar);



let pilha_voltar = ["site_1, site_2, site_3"]
let pilha_avancar = []

let selecionar = 1

function desempilha(selecionar){
    if(selecionar === 1){
        let remover = pilha_voltar.pop()
        pilha_avancar.push(remover)
        console.log(pilha_voltar)
        console.log(pilha_avancar)
    }
}

let = ["musica1", "musica2", "musica3", "musica4"]


let indice_atual = 0

function avancar(musicas){
    if(indice_atual < musicas.length){
        indice_atual += 1
        console.log("tocando:" + musicas(indice_atual))
    }else{
        indice_atual = 0
        console.log("tocando:", musicas(indice_atual))
    }

}

function voltar(){
    if(indice_atual < musicas.length + 1){
        indice_atual - 1
        console.log("tocando:", musicas(indice_atual))
    }
}


let peso = 80
let altura = 1.75
let calculo = altura*altura
let calculo2 = peso/calculo
if (calculo2>26){
console.log("Você esta acima do peso")

}
else if(calculo2<20){
    console.log("Vai tomar bomba que é mais facil")

}
else if(calculo2 === 21 || calculo2 === 22 || calculo2 === 23){
    console.log("Está no ideal")
}

//Nota
let nota1 = 5
let nota2 = 11
let nota3 = 7
let soma = nota1+nota2+nota3
let media = soma/3

if (media>=9){
    console.log("Nota A")
}
else if (media >=9){

}




//Carro

let idade = 18
let medio = true
if (idade>=18 && medio){
    console.log("pode ter um carro")
}
else{
    console.log("Não pode ter o carro")}{
}

 const ps = require("prompt-sync")
const prompt = ps()
let name = prompt("Qual seu nome:")
console.log(name)


if(name === "Leonardo"){
    console.log("Logado")
}if(name ==! "Leonardo"){
    console.log("Não Logado")
}

let nota = 3
if(nota >= 6){
    console.log("Aprovado")
}else if(nota < 6){
    console.log("Reprovado")
}

let lado1 = prompt ("Lado: ")
let lado2 = prompt ("Lado: ")
let lado3 = prompt ("lado: ")
if (lado1 === lado2 && lado2 === lado3 && lado1 === lado3){
    console.log("Equilátero")
}else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log("Isóceles")
}else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
    console.log("Escaleno")
}


let tipo_entrega = prompt("Defina tipo entrega: ")
let km = prompt("Defina distancia em km:")

function calcula_normal(km){
    return km*0.50
}

function calcula_expressa(km){
    if(km > 100){
        return km * 100
    }else{
        return km*0.75
    }
    
}
function mostra_valor(valor){
    console.log(valor)
}
if (tipo_entrega === "Normal"){
    valor = calcula_normal(km)
    mostra_valor(valor)
}
if (tipo_entrega === "Expressa"){
     valor = calcula_expressa(km)
     mostra_valor(valor) 
}else{
    console.log("Invalida")
}

let operação = prompt("Escolha a sua operação: ")
let part1 = Number (prompt("Escolha algum numero: "))
let part2 = Number (prompt("Escolha outra numero: "))
function menos(part1,part2){
    return part1 - part2
}if(operação === "menos"){
    console.log(menos(part1, part2))
}
function adicao(part1, part2){
    return part1 + part2
}if(operação === "adicao"){
    console.log(adicao(part1, part2))
}
function divisao(part1, part2){
    return part1 / part2
}if(operação === "divisao"){
    console.log(divisao(part1, part2))
}
function multiplicacao(part1, part2){
    return part1 * part2
}if(operação === "multiplicacao"){
    console.log(multiplicacao(part1, part2))
}





let number = Number (prompt("escolha um numero: "))
let number2 = Number(prompt("Escolha outro numero: "))

function potencia(number, number2){
   return Math.pow(number, number2);
}
let resulta = potencia(number,number2);
console.log(resulta);

let num = Number(prompt("Numero: "))
const numero = 16;
const raizQuadrada = Math.sqrt(numero);
console.log(raizQuadrada);


let idad = Number(prompt("idade: "))
function valoridade(idad){
    return idad/2 + 7
}
let resultad = (idad / 2 + 7)
console.log("idade min =" +  resultad)
function valoridadem(idad){
    return 2*(idad - 7) 
}
let resolvido = (2*(idad - 7))
console.log("idade maxima =" + resolvido)






let lista = [1, 2, 3, 4, 5]
lista.push(100)
lista.unshift(12)
lista.splice(1, 1, 222)
lista[5] = 10
lista.splice(1, 2)
lista.pop(100)
console.log(lista)




//FILA//
let fila = [0, 1]
fila.push(2)
fila.push(3)
fila.shift()
let valor = fila.shift()
console.log(valor)



//PILHA//
let pilha = []
pilha.push(2)
pilha.push(3)
pilha.unshift(1)
pilha.pop()
console.log(pilha)






function distanciaEntrePontos(x1, y1, x2, y2) {
    // Calcula a diferença entre as coordenadas x e y
    const diffX = x2 - x1;
    const diffY = y2 - y1;
  
    // Eleva as diferenças ao quadrado
    const quadradoDiffX = diffX * diffX;
    const quadradoDiffY = diffY * diffY;
  
    // Calcula a soma dos quadrados das diferenças
    const somaQuadrados = quadradoDiffX + quadradoDiffY;
  
    // Calcula a raiz quadrada da soma
    const distancia = Math.sqrt(somaQuadrados);
  
    // Retorna a distância
    return distancia;
  }
  
  // Exemplo de uso
  const ponto1 = 3;
  const ponto = 4;
  const ponto2 = 7;
  const po = 11;
  
  const distanca = distanciaEntrePontos(ponto1X, ponto1Y, ponto2X, ponto2Y);
  console.log("A distância entre os pontos é:", distancia);



  let taman = 5
  for(let i = 0; i <=tamanho; i++){
     console.log(i)
  }
