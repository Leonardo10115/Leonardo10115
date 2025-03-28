// 1.Declarando algumas variáveis para usar nos testes
let a = 10 // variável a, com valor 10 (let significa que pode mudar)
let b = 20 // variável b, com valor 20
let c = 30 // variavel c, com valor 30

console.log(c)
console.log(b)

// 2. Testando operadores de comparação
console.log("Operadores de comparação")
console.log("a é igual a b?"+(a == b)) //Concatenação com comparação
console.log("a é diferente de b!"+(a != b))// Operador para testar diferencia (!=)
console.log("a é maior que b? " + (a > b))// Operador para testar se é maior(>)
console.log(" a é menor que b?" + (a < b))// Operador para testar se é menor(<)
console.log(" a é maior ou igual a b?" + (a >= b))// Operador de maior ou igual(>=)
console.log("a é menor ou igual a b?" + (a <= b))// Operador de maior ou igual(<=)

//3. Testando operadores lógicos

console.log("\n Operadores Lógicos: ")// \n é para quebra de linha

console.log("a é maior que 5 E b é menor que 30?" + (a > 5 && b < 30))// Operador lógico "E" OU "and" (&&)
console.log("c é maior 10 E a é menor que 11?" + (c > 10 && a < 11))
console.log("b é maior que 7 E c é menor que 6?" + (b > 7 && c < 6))

// or
console.log("a é igual a 10 OU b é maior que 25?" + (a == 10 || b > 25)) // Operador lógico "OU" ou "OR" (||)
// NOT 

console.log("a não é maior que 5?" + !(a > 5)) // Operador lógico "NÃO" ou "NOT" (!) 


