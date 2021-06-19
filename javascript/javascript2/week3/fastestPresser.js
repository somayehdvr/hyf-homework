const input = document.querySelector('input')
const button = document.querySelector('button')
const sCount = document.querySelector('.sCount')
const lCount = document.querySelector('.lCount')
const winner = document.querySelector('.winner')
sCount.innerHTML = 0
lCount.innerHTML = 0
let gameTime

button.addEventListener('click', getGameTime)

function getGameTime() {
    gameTime = input.value
    setTimeout(() => { 
        showWinner(sCount.innerHTML, lCount.innerHTML)
        button.innerHTML = 'start a new game :)'
    }
        , gameTime * 1000)
    sCount.innerHTML = 0
    lCount.innerHTML = 0
    winner.innerHTML = ''
}

function showWinner (s, l) {
    if (s > l) {
        winner.innerHTML = 'S is winner!'
    }
    else if (l > s) {
        winner.innerHTML = 'L is winner!'
    }
    else {
        winner.innerHTML = 'Both of you are winner!'
    }
}

document.addEventListener('keydown', function(event) {
    if (gameTime) {
        if(event.keyCode == 83) {
            sCount.innerHTML++
        }
        else if(event.keyCode == 76) {
            lCount.innerHTML++
        }
    }
})