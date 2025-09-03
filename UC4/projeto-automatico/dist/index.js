"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
// Função principal que irá criar o projeto
function createTsProject() {
    // Código será adicionado aqui nos próximos passos
    // Passo 1: Pergunta o nome do projeto
    const projectName = readline_sync_1.default.question("Digite o nome do projeto: ");
    // Validação simples: não pode ser vazio
    if (!projectName) {
        console.log("❌ Nome do projeto não pode ser vazio!");
        return; // encerra a função se o usuário não digitou nada
    }
}
// Chama a função principal
createTsProject();
