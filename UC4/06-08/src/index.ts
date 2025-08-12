
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

const numeros:number[] = [10,20,30,40,50]
/*
for(let i:number = 0; i <numeros.length; i++) {
    console.log("Numero:" + numeros[i])
}
*/

///Esse e mais limitado que o de cima

for(let numero of numeros){
    console.log("Numeros:" + numero)
}

//Exercicios 07/08 loops

//1
const sociedade:string[] = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];

for(let i:number = 0; i < sociedade.length; i++) {
  if(i == 0 || i == 1 || i == 5 || i == 6){
    console.log("Hobbit encontrado: " + sociedade[i])
  }
}

//2
const jedi = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
  ];

  for(const personagem of jedi){
    if(personagem.jedi === true){
        console.log(`são jedi: ` + personagem.nome)
    }
}

// 3 - Naruto - Clãs
const personagensNaruto = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake'
};

for (let personagem in personagensNaruto) {
    console.log(`${personagem} pertence ao clã ${personagensNaruto[personagem as keyof typeof personagensNaruto]}`);
}

// 4 - Dragon Ball - Poder
const personagensDBZ = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
    ];
    
    personagensDBZ.forEach((personagem) => {
    if (personagem.poder > 8000) {
    console.log(`O poder de ${personagem.nome} é de mais de 8000!`);
    }
    });
    
// 5 - Pokémon - While
const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];
let contador = 0;

while (contador < pokemons.length) {
if (pokemons[contador] === 'Mewtwo') {
console.log('Pokémon lendário encontrado: Mewtwo!');
break;
}
console.log(`Capturando ${pokemons[contador]}`);
contador++;
}

// 6 - Terra Média - do...while
let passos = 0;
const passosParaMordor = 5;

do {
console.log(`Dando passo ${passos}`);
passos++;
} while (passos < passosParaMordor);

console.log('Chegamos em Mordor!');