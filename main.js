let playerXmoves = []
let playerOmoves = []

let currentPlayer;

const gameInputDivs = document.querySelectorAll('.gameInputDiv')


const currentPlayerSpan = document.querySelector('.currentPlayerSpan')
const resultSpan = document.querySelector('.resultSpan')

const resultDialog = document.querySelector('.resultDialog')
const closeResultDialogButton = document.querySelector('.closeResultDialogButton')
closeResultDialogButton.addEventListener('click',()=>{
    resultDialog.close()
})



const restartButton = document.querySelectorAll('.restartButton')
restartButton.forEach((element) => {
    element.addEventListener('click',
        function restartGame() {
            gameInputDivs.forEach((element) => {
                element.innerHTML = ''
            })

        }
    )
}
)



let gameObject = {
    currentPlayer: 'X',
    playerXmoves: [],
    playerOmoves: [],

    markedCellsCount: playerOmoves.length + playerXmoves.length,



}


function changeCurrentPlayer() {
    if (currentPlayer == undefined) {
        currentPlayer = 'X'
    }
    else if (currentPlayer == 'X') {
        currentPlayer = 'O'
    }
    else {
        currentPlayer = 'X'
    }

    currentPlayerSpan.textContent = currentPlayer

}
changeCurrentPlayer()



function cellIsMarkedOrNot(cellElement) {
    if (cellElement) {
        return cellElement.classList.contains('marked')
    }


}

function resultCalculator(playerMovesArray = [], name = null) {
    let winner;

    if (playerMovesArray.length == 0 && name == null) {
        winner = 'Draw'
    }
    else {
        let winnerArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

        winnerArrays.forEach((value, index) => {
            let matches = 0
            value.forEach((num) => {
                playerMovesArray.forEach((movePosition) => {
                    if (num == movePosition) {
                        matches++
                    }
                })
            })
            if (matches == 3) {
                winner = name
            }
            else {
                matches = 0;
            }
        })

    }
    if (winner) {
        resultSpan.textContent = winner
        resultDialog.showModal()
    }
}


function xoSpanElementCreator(name, styles) {

    const playerMoveSpanElement = document.createElement('span')
    playerMoveSpanElement.textContent = name

    if (name == 'X') {
        playerMoveSpanElement.style.color = 'red'
    }
    else {
        playerMoveSpanElement.style.color = 'green'
    }
    playerMoveSpanElement.style.cssText += styles

    return playerMoveSpanElement
}

function markCell(element) {
    element.innerHTML = ''
    console.log(element);
    element.appendChild(xoSpanElementCreator(currentPlayer))
    element.classList.add('marked')
    return
}


function addMove(element) {

    let moveLocation = element.getAttribute('data-position')

    if (currentPlayer == 'X') {
        playerXmoves.push(moveLocation)

        if (playerXmoves.length >= 3) {
            resultCalculator(playerXmoves, 'X')
        }
    }
    else {
        playerOmoves.push(moveLocation)

        if (playerOmoves.length >= 3) {
            resultCalculator(playerOmoves, 'O')
        }
    }

    if (playerOmoves.length + playerXmoves.length == 9) {
        resultCalculator()
    }
}

gameInputDivs.forEach((element, key) => {
    element.addEventListener('click', () => {

        if (!cellIsMarkedOrNot(element)) {
            markCell(element)
            addMove(element)
            changeCurrentPlayer()
        }
    })


    element.addEventListener('mouseenter', () => {
        if (!cellIsMarkedOrNot(element)) {
            element.classList.add('hovered')
            element.appendChild(xoSpanElementCreator(currentPlayer, 'opacity: 0.2'))

        }
    })
    element.addEventListener('mouseleave', () => {
        if (!cellIsMarkedOrNot(element)) {
            if (element.classList.contains('hovered')) {
                element.classList.remove('hovered')
                // element.textContent = ''
                element.innerHTML = ''

            }
        }
    })


})







const switchModeButton = document.querySelector('.switchModeButton')
switchModeButton.addEventListener('click', () => {
    let currentMode = switchModeButton.getAttribute('data-CurrentMode')
    if (currentMode == 'light') {
        switchModeButton.setAttribute('data-CurrentMode', 'dark')
        document.body.classList.add('darkMode')
    }
    else {
        switchModeButton.setAttribute('data-CurrentMode', 'light')
        document.body.classList.remove('darkMode')
    }

})
