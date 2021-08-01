const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')
const jogar = document.getElementById('jogar')
const reset = document.getElementById('reset')
const sectionEscolhas = document.getElementById('escolhas')
let divJogador = document.createElement('div')
divJogador.classList.add('playerchoice')
let divComputador = document.createElement('div')
divComputador.classList.add('computerchoice')
let divResultado = document.createElement('div')
divResultado.classList.add('result')
let imagePlayer = document.createElement('img')
let imageComputer= document.createElement('img')
let result = document.createElement('h2')

let player = null
let computer = null   


pedra.addEventListener('click', function(){
    imagePlayer.src = "pedra.png"
    player = 'pedra'
    showImageJogador("pedra.png")
})

papel.addEventListener('click', function(){
    imagePlayer.src = "papel.png"
    player = 'papel'
    showImageJogador("papel.png")
})

tesoura.addEventListener('click', function(){
    imagePlayer.src = "tesoura.png"
    player = 'tesoura'
    showImageJogador("tesoura.png")
})



function showImageJogador(image) {
    imagePlayer.src = image
    divJogador.appendChild(imagePlayer)
    return sectionEscolhas.appendChild(divJogador)
}

function showImageComputador(image) {
    imageComputer.src = image
    divComputador.appendChild(imageComputer)
    return sectionEscolhas.appendChild(divComputador)
}

function showResult(resultado){
    result.innerHTML = resultado
    divResultado.appendChild(result)
    return sectionEscolhas.appendChild(divResultado)
}

jogar.addEventListener('click', function(){  
    let randomNum = getRandomIntInclusive()

    if(randomNum===1) {
    imageComputer.src = "pedra.png"
    computer = 'pedra'
    }else if(randomNum===2) {
    imageComputer.src = "papel.png"
    computer = 'papel'
    }else if(randomNum===3) {
    imageComputer.src = "tesoura.png"
    computer = 'tesoura'
    }
    showImageComputador(imageComputer.src) 
    whoWin(player, computer)  
})

function getRandomIntInclusive() {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  }



let combinacoesGanhadoraJogador = [
    ['pedra', 'tesoura'],  
    ['papel', 'pedra'],  
    ['tesoura', 'papel']
]

let combinacoesGanhadoraComputer = [
    ['tesoura', 'pedra'],  
    ['pedra', 'papel'],  
    ['papel', 'tesoura']
]

function whoWin (player, computer) {
let jogada = [player, computer]
if(computer === player) {
    showResult('EMPATE')
    return result.innerHTML = 'EMPATE'
}
   for(let i = 0; i < combinacoesGanhadoraJogador.length; i++) {
       if(combinacoesGanhadoraJogador[i][0] === jogada[0] && combinacoesGanhadoraJogador[i][1] === jogada[1]){
        showResult('JOGADOR GANHOU')
          return result.innerHTML = 'JOGADOR GANHOU'
       }else if(combinacoesGanhadoraComputer[i][0] === jogada[0] && combinacoesGanhadoraComputer[i][1] === jogada[1]){
        showResult('COMPUTADOR GANHOU')
          return result.innerHTML = 'COMPUTADOR GANHOU'
       }
}

}



reset.addEventListener('click', function(){
    divResultado.innerHTML = '';
    divJogador.innerHTML = '';
    divComputador.innerHTML = '';
    })

    