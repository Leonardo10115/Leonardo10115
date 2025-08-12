let nomeTurma: string = "25-1N"
let numeroAlunos: number = 20

let nome: string[] = ["Pedro", "Leo", "Arthur"]

function mensage():void {
    console.log("Olá")
}

function calcula(num1:number, num2:number):number {
    return num1 + num2
}
console.log(calcula(11, 10))




/////Exercicios

function informações(nomeAluno:string, idadeAluno:number, estaMatriculado:boolean):void {
console.log(`Alunos ${nomeAluno}, ${idadeAluno} anos, estaMatriculado: ${estaMatriculado}`)
}



//2

const alunos: string[] = ["Leo", "Pedro", "Arthur", "Guilherme", "Matheus"];


function listarAlunos(lista: string[]): string {
  return "Alunos:\n" + lista.join("\n");
}

console.log(listarAlunos(alunos));

///3
function saudacao(Leonardo:string):void {
    console.log(`Olá, ${Leonardo}! Bem-vindo(a) á turma.`)
}
saudacao("Leonardo")
///4

///5

function contarAlunos(lista: string[]): void {
    console.log(`Total de alunos: ${lista.length}`);
  }
  
  // Exemplo de uso
  let turma: string[] = ["João", "Maria", "Pedro"];
  contarAlunos(turma);