let sum = 0
let card = []
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
 // let sumEl = document.getElementById('sum-el')
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#card-el')
let playerEl = document.getElementById("player-el")
let player = {
    name: "Matthew",
    chips: 200
}

playerEl.textContent = player.name + ": " + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) +1
    if (randomNumber === 1){
        return 11
    }else if (randomNumber > 10){
        return 10
    }else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    card.push(firstCard)
    card.push(secondCard)

    sum = firstCard + secondCard

    renderGame()
}

        
function renderGame(){

    cardEl.textContent = "card: "

    for (let i = 0; i < card.length; i++){
        
        cardEl.textContent += card[i] + " "
    }
 
    sumEl.innerText = "sum: " + sum

        if (sum <= 20) {
            message = "Do you want to draw a new card?"
            }else if(sum === 21) {
                message = "Yay! You've a blackjack"
                hasBlackJack = true
            }else{
                message = "Ooops! you are out of the game"
                isAlive = false
            }
            messageEl.textContent = message
            
        }


function newCard(){

    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard()

        card.push(thirdCard)
             
        sum += thirdCard
            
        renderGame()
    }
    
    }

function rollDice(){
    let randomNumber = Math.floor(Math.random()*6) + 1
    return randomNumber
}
        