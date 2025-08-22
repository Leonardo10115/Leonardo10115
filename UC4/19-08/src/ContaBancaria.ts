export class ContaBancaria {
    protected saldo:number

    constructor(saldo:number){
        this.saldo = saldo
    }
    protected atualizarSaldo(novoSaldo:number){ 
        console.log(`Saldo ${this.saldo += novoSaldo}`)
    }
}
//Outro método de usar
//  protected atualizarSaldo(novoSaldo:number):void{ 
//   this.saldo += novoSaldo