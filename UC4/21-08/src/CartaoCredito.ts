import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento{
    processar(): void {
        console.log(`O pagamento foi feito com o Cartao de credito.`)
    }
}