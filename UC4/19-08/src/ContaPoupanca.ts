import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria{

    constructor(saldo:number){
        super(saldo)
    }

    aplicarJuros(juros:number){
        this.atualizarSaldo(juros)
    }
}
//aplicarJuros():void{
//  let juros = this.saldo * 0.02
//this.atualizarSaldo(juros)
//console.log(`Saldo com juros: RS ${}`)
//}