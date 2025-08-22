import { Biscicleta } from "./Biscicleta";
import { Boleto } from "./Boleto";
import { Cachorro } from "./Cachorro";
import { Carro } from "./Carro";
import { CartaoCredito } from "./CartaoCredito";
import { Gato } from "./Gato";
import { Pagamento } from "./Pagamento";
import { Veiculo } from "./Veiculo";


const meuAnimal:Cachorro = new Cachorro()
const outroAnimal:Gato = new Gato()
meuAnimal.falar()
outroAnimal.falar()



const transporte: Veiculo[] = [new Carro(), new Biscicleta(), new Veiculo()]

transporte.forEach( andar => {
    andar.mover()
})

const conta: Pagamento[] = [new Boleto(), new CartaoCredito(), new Pagamento()];

conta.forEach(pago => {
    pago.processar(); 
});

//not GPT.