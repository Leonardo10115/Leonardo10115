// 1. Checando se pode acessar área restrita (>=18 anos, assinatura)

;// Declarando as variáveis 
let b = 16 // A pessoa tem 18 anos 
let TemAssinatura = true // A pessoa tem uma assinatura (true)
// Verificando se a pessoa pode acessar  a área
console.log("A pessoa pode acessar a área exclusiva? " + (b >=18 && TemAssinatura))

/* 
A pessoa pode acessar a área exclusiva se for maior ou igual a 18 anos E se tiver uma assinatura paga.
 O operador "&&" (AND) vai retornar true se as duas condições forem verdadeiras.
Passos:
1. Declarar as variantes necessarias e atribuir valores
2.Testar



2. Checando se pode comprar bebida alcoólica (>=18 anos, documento)

 Declarando variáve
/*/
let idade = 18 
let TemDocumento = true
console.log("A pessoa pode comprar bebidas alcoólicas?" + (idade >=18 && TemDocumento))

//3.

let valor = 100
let vip = true
console.log("A pessoa pode usar o cupom em uma compra de 90?" + (valor >=100 || vip))

//4.

let alguem = 65
let Deficiência = false
console.log("A pessoa pode estacionar na vaga?" + (alguem >=65 || Deficiência))

//5. 

let controle = true
let consoleTV = false
console.log("A pessoa precisa ter o controle OU o consoleTV?" + (controle || consoleTV))

//6.

let logado = true
let administrador = false
console.log("O usuario tem permissão para a área restrita?" + (logado && administrador))

//7.

let senha = true
let alcance = false
console.log("o usario tem permissão para a rede?" + (senha && alcance))

//8.

let renda = 3.000
let limpo = true
console.log("A pessoa consegue fazer um emprestimo?" + (renda && limpo))

//9.


let clientevip = true
let preço = 129
console.log("A pessoa tem acesso ao cupom?" + (preço >=129 || clientevip))

//10.

let idades = 18
let autorização = false
console.log("A pessoa pode ir ao evento?" + (idades >=18 || autorização))


//11.

let pago = true
let comprovante = false
console.log("A pessoa pode comprar o video game?" + (pago || comprovante))

//12.

let cartão = true
let passagem = false
console.log("A pessoa pode usar o transporte?" + (cartão || passagem))

//13.

let maior = true
let experiencia = 5
console.log("A pessoa pode ser contratada?" + (maior || experiencia))

//14.

let identidade = true
let maioridade = 35
let responsavel = false
console.log("A pessoa pode comprar um bilhete?" + (identidade && maioridade >=35 || responsavel))