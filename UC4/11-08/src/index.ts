
import * as readline from "readline-sync";

function somar(a: number, b: number): number {
    return a + b;
}

function subtrair(a: number, b: number): number {
    return a - b;
}

function multiplicar(a: number, b: number): number {
    return a * b;
}

function dividir(a: number, b: number): number {
    if (b === 0) {
        console.log(" divisão por zero não é permitida.")
    }
    return a / b
}
let opcao: number = 0;


while (opcao !== 5) {
    function mostrarMenu(): void {
        console.log("\n=== CALCULADORA ===");
        console.log("1 - Somar");
        console.log("2 - Subtrair");
        console.log("3 - Multiplicar");
        console.log("4 - Dividir");
        console.log("5 - Sair");
    }
    mostrarMenu();
    opcao = Number(readline.question("Escolha uma opcao: "));

    if (opcao >= 1 && opcao <= 4) {
        const num1 = Number(readline.question("Digite o primeiro numero: "));
        const num2 = Number(readline.question("Digite o segundo numero: "));
        let resultado: number;

        switch (opcao) {
            case 1:
                resultado = somar(num1, num2);
                console.log(`Resultado: ${resultado}`);
                break;
            case 2:
                resultado = subtrair(num1, num2);
                console.log(`Resultado: ${resultado}`);
                break;
            case 3:
                resultado = multiplicar(num1, num2);
                console.log(`Resultado: ${resultado}`);
                break;
            case 4:
                resultado = dividir(num1, num2);
                if (!isNaN(resultado)) {
                    console.log(`Resultado: ${resultado}`);
                }
                break;
        }
    } else if (opcao !== 5) {
        console.log("Não foi possivel. Tente novamente");
    }
}

console.log("Menu encerrado.");