

// const container = document.querySelector('.container')
const grid = document.querySelector('.grid')


function createGrid() {
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'black'
        })
        grid.appendChild(cell)
    }
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector('#slider')
const screenValue = document.querySelector('.value')

slider.addEventListener('input', () => {
    let value = slider.value
    screenValue.textContent = value
    removeAllChildNodes(grid)
    grid.setAttribute('style', `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr)`)
    for (let i = 0; i < value * value; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'black'
        })
        grid.appendChild(cell)
    }
})
createGrid()




