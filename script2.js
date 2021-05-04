const X_CLASS ='x'
const CIRCLE_CLASS ='circle'
const WINNING_COMBINATIONS = [
[0, 1, 2],
[3, 4, 5],
[6, 7 ,8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]') // defining var as constant///
const board = document.getElementById('board')
const winningmessageElement = document.getElementById('winningmessage')
const restartButton = document.getElementById('restartbutton')
const winningmessagetextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame) // listen the event if click happen as i told you as so start the game//

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click',handleClick)
    cell.addEventListener('click', handleClick, { once: true }) 
})

setBoardHoverClass()
winningmessageElement.classList.remove('show')}


function handleClick(e) {
    const cell = e.target ///which is whatever we click on//
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS ///__if itscircles turn we want return circle clas viceversa///
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {      ////if checkwin i want to do something inside of this//
    endGame(false)
    } else if (isDraw()) {
    endGame(true)
    } else { 
    swapTurns()
    setBoardHoverClass()//hover has to based on whos turn currently is after swap not who s turn is used to be///
    } 
    }
    
function endGame(draw) { // here we have the fucntion of winning text message who wins if x win its circles vice versa//
    if(draw){
        winningmessagetextElement.innerText = 'Draw!'
    } else {
    winningmessagetextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
        winningmessageElement.classList.add('show')
}


function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
     })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}


    function setBoardHoverClass() { // here we have the function of hover class if there is circle and x will the hover remove vice versa//

    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
    
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some (combination => { //loop all over diffrent combinations//
        return combination.every(index=> { //we wanna make sure every element has the same class//
            return cellElements[index].classList.contains //we are checking wchic cell class we want to see it contains current class is it the curren class//
            (currentClass) //everysingle celll once is correct we want to check if some of the winnig combinations is met//
        })
    })
}