import { Forma } from "./Forma"
import { FuncionarioCLT } from "./FuncionarioCLT"
import { FuncionarioPJ } from "./FuncionarioPJ"
import { Retangulo } from "./Retangulo"
import { Triangulo } from "./Triangulo"

const funcionarioclt: FuncionarioCLT = new FuncionarioCLT("", 120)
const funcionariopj: FuncionarioPJ =  new FuncionarioPJ("", 212)

funcionarioclt.calcularSalario()
console.log(funcionariopj.calcularSalario())


const forma:Forma[] = [new Retangulo(17,5), new Triangulo(13,23)]
