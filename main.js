let playerXmoves = []
let playerOmoves = []

let currentPlayer;

const gameInputDivs = document.querySelectorAll('.gameInputDiv')


const currentPlayerSpan = document.querySelector('.currentPlayerSpan')
const resultSpan = document.querySelector('.resultSpan')

let gameObject = {
    currentPlayer:'X',
    playerXmoves:[],
    playerOmoves:[],

    markedCellsCount: playerOmoves.length+playerXmoves.length,



}


function changeCurrentPlayer(){
    if (currentPlayer == undefined) {
        currentPlayer = 'X'
    }
    else if (currentPlayer == 'X') {
        currentPlayer = 'O'
    }
    else{
        currentPlayer = 'X'
    }

    currentPlayerSpan.textContent = currentPlayer
    
}
changeCurrentPlayer()



function resultCalculator(playerMovesArray, name) {

    let winnerArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

    let winner = 'none';
    winnerArrays.forEach((value, index)=>{
        let matches = 0
        value.forEach((num)=>{
            playerMovesArray.forEach((movePosition)=>{
                if (num==movePosition) {
                    matches++
                }
            })
        })
        if (matches==3) {
            winner = name
        }
        else{
            matches = 0;
        }
    })

    resultSpan.textContent = winner
    
}

gameInputDivs.forEach((element, key) => {
    element.addEventListener('click', ()=>{

        if (!element.textContent) {
            element.textContent = currentPlayer
            let moveLocation = element.getAttribute('data-position')
            // console.log(moveLocation);

            if (currentPlayer=='X') {
                playerXmoves.push(moveLocation)
                // console.log('X:', playerXmoves);

                if (playerXmoves.length>=3) {
                    resultCalculator(playerXmoves, 'X')
                }
            }
            else{
                playerOmoves.push(moveLocation)
                // console.log('O:', playerOmoves);

                if (playerOmoves.length>=3) {
                    resultCalculator(playerOmoves, 'O')
                }
            }

            changeCurrentPlayer()
        }

        console.log(playerOmoves.length + playerXmoves.length);
        if (playerOmoves.length + playerXmoves.length == 9) {
            resultSpan.textContent = 'Draw'
        }
    })

})







const switchModeButton = document.querySelector('.switchModeButton')
switchModeButton.addEventListener('click', () => {
    let currentMode = switchModeButton.getAttribute('data-CurrentMode')
    if (currentMode=='light') {
        switchModeButton.setAttribute('data-CurrentMode', 'dark')
        document.body.classList.add('darkMode')
    }
    else{
        switchModeButton.setAttribute('data-CurrentMode', 'light')
        document.body.classList.remove('darkMode')    
    }

})
