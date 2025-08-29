let mapa = [
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
  ['.', '.', '.', '.', '.', '.', '.', 'P', '.', '.']
  ['.', 'E', '.', '.', '.', '.', 'I', '.', '.', '.']
  ['.', '.', '.', '.', 'I', '.', '.', '.', 'E', '.']
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
  ['.', '.', '.', 'I', '.', '.', '.', '.', '.', '.']
  ['.', 'E', '.', '.', '.', '.', '.', 'E', '.', '.']
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]

const player = {
  x: 0,
  y: 0,
  vida:100,
  inventario:[]
}

let fimDeJogo = false

function desenharMapa(){
  console.clear()
  mapa.forEach((linha, y) =>{
    console.log(linha.map((cel, x) =>(jogador.x === x && jogador.y === y ? 'P' : cel)).join(''))
  })
  console.log("Vida: (jogador.vida)")
  console.log("Inventario: (jogador.inventario.join(', ') || 'vazio')")
  if (fimDeJogo) console.log("Fim de jogo - voce morreu!")
}

function mover(direcao){
  if(fimDeJogo) return console.log("O jogo acabou!")

  let dx = 0, dy = 0
  if(direcao === 'w') dy = -1
  if(direcao === 's') dy = 1
  if(direcao === 'a') dx = -1
  if(direcao === 'd') dx = 1
  










































































}
