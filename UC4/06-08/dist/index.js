"use strict";
/*for( let voltas:number = 0; voltas <= 10; voltas++) {
    console.log(`O ciclista deu ${voltas} voltas.`)
}
console.log("O ciclista venceu a corrida!")
*/
//ENQUANTO
/*let voltas:number = 0
while(voltas <= 10) {
console.log(`O ciclista deu ${voltas} voltas`)
voltas++
}
*/
//Posso usar um for para percorrer um array
const numeros = [10, 20, 30, 40, 50];
/*
for(let i:number = 0; i <numeros.length; i++) {
    console.log("Numero:" + numeros[i])
}
*/
///Esse e mais limitado que o de cima
for (let numero of numeros) {
    console.log("Numeros:" + numero);
}
//Exercicios 07/08 loops
//1
const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];
for (let i = 0; i < sociedade.length; i++) {
    if (i == 0 || i == 1 || i == 5 || i == 6) {
        console.log("Hobbit encontrado: " + sociedade[i]);
    }
}
//2
const jedi = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
];
for (const personagem of jedi) {
    if (personagem.jedi === true) {
        console.log(`são jedi: ` + personagem.nome);
    }
}
//3
const personagens = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake'
};
for (const cla in personagens) {
    console.log(`${cla}: ${personagens[cla]}`);
}
