export class Veiculo {
    protected velocidade:number

    constructor(velocidade:number){
        this.velocidade = velocidade
    }
    //Método protect nao pode ser chamado no index, so pode ser chamado por outro metedo
    protected Velocidade(velocidade: number) {
        this.velocidade = velocidade
        console.log(`velocidade: ${this.velocidade}`);
    }
    }
