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
[2,4,6]
]
const cellELemets = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningmessageELement =
document.getElementById('winningmessage')
const restartButton = document.getElementById('restartbutton')
const winninmessagetextElement = 
document.querySelector('[data-winning-message-text]')
let circleTurn
startGame()

restartButton.addEventListener('click',startGame)
function startGame(){
    circleTurn = false
    cellElements.forEach(cell =>{
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell-removeEventListener('click',handleClick)
    cell.addEventListener('click', handleClick, { once: true } ) 
})


function handleCLick(e) {
    const cell = e.target ///which is whatever we click on//
    const currentCLass = circleTurn ? CIRCLE_CLASS : X_CLASS ///__if itscircles turn we want return circle clas viceversa///
    placeMark(cell, currentCLass)
    if(checkWin(currentCLass)){      ////if checkwin i want to do something inside of this
        endeGame(false)
    } else if (isDraw()){
        endeGame(true)
    } else { swapTurns()
        setBoardHoverClass()//hover has to based on whos turn currently is after swap not who s turn is used to be///
    } 
    }
    



function placeMark(cell, currentCLass) {
    cell.classList.add(currentCLass)
}

function swapTurns(){
    circleTurn=!circleTurn
}


function setBoardHoverCLass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn){
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
    
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some (combination => { //loop all over diffrent combinations
        return combination.every(index=> { //we wanna make sure every element has the same class
            return cellELemets[index].classList.contains //we are checking wchic cell class we want to see it contains current class is it the curren class
            (currentClass) //everysingle celll once is correct we want to check if some of the winnig combinations is met
        })
    })

}