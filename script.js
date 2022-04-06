let jogador, vencedor = null
let vencedorX = 0, vencedorO = 0

let pontoX = document.getElementById('ponto-x')
let pontoO = document.getElementById('ponto-o')
let jogadorSelecionado = document.getElementById('jogador-selecionado')
let vencedorSelecionado = document.getElementById('vencedor-selecionado')
let quadrados = document.getElementsByClassName('blocoJogo')

pontoX.innerHTML = vencedorX
pontoO.innerHTML = vencedorO




mudarJogador('X')

function escolherQuadrado(id) {

  if (vencedor !== null) {
    return;
  }
  let quadrado = document.getElementById(id);

  if (quadrado.innerHTML !== '-') {
    return
  }
  quadrado.innerHTML = jogador;
  quadrado.style.color = '#000';


  if (jogador === 'X') {
    jogador = "O"
  } else {
    jogador = 'X'
  }

  mudarJogador(jogador)
  checarVencedor();

}

function mudarJogador(value) {
  jogador = value
  jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {
  let quadrado1 = document.getElementById(1)
  let quadrado2 = document.getElementById(2)
  let quadrado3 = document.getElementById(3)
  let quadrado4 = document.getElementById(4)
  let quadrado5 = document.getElementById(5)
  let quadrado6 = document.getElementById(6)
  let quadrado7 = document.getElementById(7)
  let quadrado8 = document.getElementById(8)
  let quadrado9 = document.getElementById(9)

  if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
    mudaCorQuadrado(quadrado1, quadrado2, quadrado3)
    mudarVencedor(quadrado1)
    pontuacao(quadrado1)

    return;
  }
  if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
    mudaCorQuadrado(quadrado4, quadrado5, quadrado6)
    mudarVencedor(quadrado4)
    pontuacao(quadrado4)
    return;
  }
  if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
    mudaCorQuadrado(quadrado7, quadrado8, quadrado9)
    mudarVencedor(quadrado7)
    pontuacao(quadrado7)
    return;
  }
  if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
    mudaCorQuadrado(quadrado1, quadrado4, quadrado7)
    mudarVencedor(quadrado1)
    pontuacao(quadrado1)
    return;
  }
  if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
    mudaCorQuadrado(quadrado2, quadrado5, quadrado8)
    mudarVencedor(quadrado2)
    pontuacao(quadrado2)
    return;
  }
  if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
    mudaCorQuadrado(quadrado3, quadrado6, quadrado9)
    mudarVencedor(quadrado3)
    pontuacao(quadrado3)
    return;
  }
  if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
    mudaCorQuadrado(quadrado1, quadrado5, quadrado9)
    mudarVencedor(quadrado1)
    pontuacao(quadrado1);
    return;
  }
  if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
    mudaCorQuadrado(quadrado3, quadrado5, quadrado7)
    mudarVencedor(quadrado3)
    pontuacao(quadrado3)
    return;
  }


}

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML
  vencedorSelecionado.innerHTML = vencedor
}

function pontuacao(quadrado) {
  vencedor = quadrado.innerHTML
  vencedorSelecionado.innerHTML = vencedor

  if (vencedor === 'X') {
    vencedorX++
  }
  if (vencedor === 'O') {
    vencedorO++
  }

  pontoX.innerHTML = vencedorX
  pontoO.innerHTML = vencedorO
  console.log(vencedorX)
  console.log(vencedorO)
}


function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = "#0F0";
  quadrado2.style.background = "#0F0";
  quadrado3.style.background = "#0F0";
  quadrado1.style.color = "#eee";
  quadrado2.style.color = "#eee";
  quadrado3.style.color = "#eee";
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
  let eigual = false
  if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
    eigual = true
  }
  return eigual
}

function reiniciar() {

  vencedor = null
  vencedorSelecionado.innerHTML = '';

  for (let i = 1; i <= 9; i++) {
    let quadrado = document.getElementById(i);
    quadrado.style.background = 'rgb(214, 217, 217)';
    quadrado.style.color = 'rgb(214, 217, 217)'
    quadrado.innerHTML = "-";
  }
  mudarJogador('X')

}
function novoJogo() {
  vencedor = null
  vencedorX = 0
  vencedorO = 0
  pontoX.innerHTML = vencedorX
  pontoO.innerHTML = vencedorO
  vencedorSelecionado.innerHTML = '';

  for (let i = 1; i <= 9; i++) {
    let quadrado = document.getElementById(i);
    quadrado.style.background = 'rgb(214, 217, 217)';
    quadrado.style.color = 'rgb(214, 217, 217)'
    quadrado.innerHTML = "-";
  }
  mudarJogador('X')

}