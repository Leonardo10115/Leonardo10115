"use strict";
let nomeTurma = "25-1N";
let numeroAlunos = 20;
let nome = ["Pedro", "Leo", "Arthur"];
function mensage() {
    console.log("Olá");
}
function calcula(num1, num2) {
    return num1 + num2;
}
console.log(calcula(11, 10));
/////Exercicios
function informações(nomeAluno, idadeAluno, estaMatriculado) {
    console.log(`Alunos ${nomeAluno}, ${idadeAluno}, $"estaMatriculado"`);
}
//2
const alunos = ["Leo", "Pedro", "Arthur", "Guilherme", "Matheus"];
function listarAlunos(lista) {
    return "Alunos:\n" + lista.join("\n");
}
console.log(listarAlunos(alunos));
///3
function saudacao(Leonardo) {
    console.log(`Olá, ${Leonardo}! Bem-vindo(a) á turma.`);
}
saudacao("Leonardo");
