




const gameInputDivs = document.querySelectorAll('.gameInputDiv')


const gameBoard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']



// function createCrossCircle

let game = function(){console.log("bruh");}()



gameInputDivs.forEach((element, key) => {
    console.log(element);
    console.log(key);

    const cross = document.createElement('span')
    cross.textContent = 'X'
    cross.classList.add('cross')

    const circle = document.createElement('span')
    circle.textContent = 'O'
    circle.classList.add('circle')

    if (gameBoard[key] == 'X') {
        element.appendChild(cross)
    }
    else {
        element.appendChild(circle)
    }
    // element.textContent = gameBoard[key]



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
