const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
const play = document.getElementById('play')
const reset = document.getElementById('reset')
const chooseSection = document.getElementById('choices')
let playerDiv = document.createElement('div')
playerDiv.classList.add('playerchoice')
let computerDiv = document.createElement('div')
computerDiv.classList.add('computerchoice')
let resultDiv = document.createElement('div')
resultDiv.classList.add('result')
let playerImage = document.createElement('img')
let computerImage = document.createElement('img')
let result = document.createElement('h2')

let player = null
let computer = null   


rock.addEventListener('click', function(){
    playerImage.src = "rock.png"
    player = 'rock'
    showImageJogador("rock.png")
})

paper.addEventListener('click', function(){
    playerImage.src = "paper.png"
    player = 'paper'
    showImageJogador("paper.png")
})

scissor.addEventListener('click', function(){
    playerImage.src = "scissor.png"
    player = 'scissor'
    showImageJogador("scissor.png")
})



function showImageJogador(image) {
    playerImage.src = image
    playerDiv.appendChild(playerImage)
    return chooseSection.appendChild(playerDiv)
}

function showComputerImage(image) {
    computerImage.src = image
    computerDiv.appendChild(computerImage )
    return chooseSection.appendChild(computerDiv)
}

function showResult(resultado){
    result.innerHTML = resultado
    resultDiv.appendChild(result)
    return chooseSection.appendChild(resultDiv)
}

play.addEventListener('click', function(){  
    let randomNum = getRandomIntInclusive()

    if(randomNum===1) {
    computerImage.src = "rock.png"
    computer = 'rock'
    }else if(randomNum===2) {
    computerImage.src = "paper.png"
    computer = 'paper'
    }else if(randomNum===3) {
    computerImage.src = "scissor.png"
    computer = 'scissor'
    }
    showComputerImage(computerImage.src) 
    whoWin(player, computer)  
})

function getRandomIntInclusive() {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  }



let playerWinningCombinations = [
    ['rock', 'scissor'],  
    ['paper', 'rock'],  
    ['scissor', 'paper']
]

let computerWinningCombinations = [
    ['scissor', 'rock'],  
    ['rock', 'paper'],  
    ['paper', 'scissor']
]

function whoWin (player, computer) {
let play = [player, computer]
if(computer === player) {
    showResult('EMPATE')
    return result.innerHTML = 'EMPATE'
}
   for(let i = 0; i < playerWinningCombinations.length; i++) {
       if(playerWinningCombinations[i][0] === play[0] && playerWinningCombinations[i][1] === play[1]){
        showResult('JOGADOR GANHOU')
          return result.innerHTML = 'JOGADOR GANHOU'
       }else if(computerWinningCombinations[i][0] === play[0] && computerWinningCombinations[i][1] === play[1]){
        showResult('COMPUTADOR GANHOU')
          return result.innerHTML = 'COMPUTADOR GANHOU'
       }
}

}



reset.addEventListener('click', function(){
    resultDiv.innerHTML = '';
    playerDiv.innerHTML = '';
    computerDiv.innerHTML = '';
    })