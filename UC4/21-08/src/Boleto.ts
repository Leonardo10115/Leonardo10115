import { Pagamento } from "./Pagamento";

export class Boleto extends Pagamento{
    processar(): void {
        console.log(`O pagamento foi feito com o Boleto.`)
    }
}