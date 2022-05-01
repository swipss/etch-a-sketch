

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

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
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
const rgb = document.querySelector('#rgb');
rgb.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        })
    }
});
const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', () => {
    let val = document.querySelector('#slider').value
    let cell = grid.children
    for (let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = 'white'
    }
})

const black = document.querySelector('#black');
black.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
    }
});

const color = document.getElementById('color')
color.addEventListener('change', function() {
    let sliderValue = document.getElementById('slider').value
    let colorValue = document.getElementById('color').value
    let cell = grid.children
    for (let i = 0; i < sliderValue*sliderValue; i++) {
        cell[i].addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = colorValue
        })
    }
})


createGrid()




