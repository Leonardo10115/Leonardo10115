"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FuncionarioCLT_1 = require("./FuncionarioCLT");
const FuncionarioPJ_1 = require("./FuncionarioPJ");
const funcionarioclt = new FuncionarioCLT_1.FuncionarioCLT("", 120);
const funcionariopj = new FuncionarioPJ_1.FuncionarioPJ("", 212);
funcionarioclt.calcularSalario();
console.log(funcionariopj.calcularSalario());
