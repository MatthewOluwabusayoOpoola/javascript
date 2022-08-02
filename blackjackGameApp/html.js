let firstCard = 10
let secondCard = 11

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
 // let sumEl = document.getElementById('sum-el')
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#card-el')

function startGame(){
    renderGame()
}

        
function renderGame(){

    sumEl.innerText = "sum: " + sum
    cardEl.textContent = "card: " + firstCard + " "+ secondCard

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
    let thirdCard = 8
        
    sum += thirdCard
        
    renderGame()
    }

        