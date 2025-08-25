//Importação das classes
import * as readline from 'readline-sync';
import { Doador } from './Doador';
import { SistemaHemocentro } from './SistemaHemocentro';
const doador:SistemaHemocentro = new SistemaHemocentro("",1,1) 
doador.primeiroDoador()// Chama a função dentro da classe "SistemaHemocentro"
let opcao = ""
// Loop que vai ser executado até a opção for diferente de "5"
do{
    console.log(`
    ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sanguíneo
4. Buscar doador por data da última doação
5. Sair

    `)
    // Pergunta ao usuario qual função ele quer executar
    opcao = readline.question("Escolha uma opção: ")
    // Switch para cada opção disponivel
    // Dentro de cada caso do Switch chama uma função que esta dentro da classe "SistemaHemocentro"
    switch(opcao){
        case "1":
           doador.cadastrarDoador()
            break
        case "2":
            doador.listadeDoadores()
        break
        case "3":
        doador.buscarPorTipoSanguineo()
        break
        case "4":
            doador.buscarPorDataUltimaDoacao()
        break
        case "5":
            console.log("Saindo. Até mais...")
        break
    }


}while(opcao !== "5")