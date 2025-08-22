"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartaoCredito = void 0;
const Pagamento_1 = require("./Pagamento");
class CartaoCredito extends Pagamento_1.Pagamento {
    processar() {
        console.log(`O pagamento foi feito com o cartao de credito.`);
    }
}
exports.CartaoCredito = CartaoCredito;
