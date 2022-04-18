

const container = document.querySelector('.container')

const gridContainer = document.createElement('div')
gridContainer.classList.add('grid-container')



for (let i = 0; i < 256; i++) {
const grid = document.createElement('div')
grid.classList.add('grid')
gridContainer.appendChild(grid)


    
}
container.appendChild(gridContainer)
