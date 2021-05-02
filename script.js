const X_CLASS ='x'
const CIRCLE_CLASS ='circle'
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementbyId('restartButton')
const winningMessageTextElemet = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventlistener('click', startGame)

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventlistener('click', handleClick, { once: true })
})

    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if(checkWin(currentClass)){
        endGame(true)
    } else{
        swapTurns()
        SetBoardHoverClass()
    }
    }


function placeMark(cell, currentClass) {
    cell.classlist.add(currentClass)
}