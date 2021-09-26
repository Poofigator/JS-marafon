const board = document.querySelector('#board')
const colors = ['#7e1e9c', '#15b01a', '#0343df', '#ff81c0', '#e50000', '#ffff14', '#029386']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(el) {
    const color = gerRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = '0 0 2px #000'
}

function gerRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}