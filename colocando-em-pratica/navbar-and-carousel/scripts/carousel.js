const carousel = document.querySelector('#carousel')
const btnBack = document.querySelector('#btn-back')
const btnNext = document.querySelector('#btn-next')
const controllerOne = document.querySelector('#controller-one')
const controllerTwo = document.querySelector('#controller-two')
const controllerThree = document.querySelector('#controller-three')

const items = ['blue', 'red', 'violet']

carousel.style.backgroundColor = 'blue'
let i = 0

function changeItem() {
    const item = carousel.style.backgroundColor
    i = items.indexOf(item) + 1
    
    if (i > items.length - 1) {
        i = 0
    }

    carousel.style.backgroundColor = items[i]
}

function changeItemByController({ target }) {
    if (target.id == 'controller-one') {
        i = 0
        carousel.style.backgroundColor = items[i]
    } else if (target.id == 'controller-two') {
        i = 1
        carousel.style.backgroundColor = items[i]
    } else {
        i = 2
        carousel.style.backgroundColor = items[i]
    }
}

const change = setInterval(changeItem, 3000)
controllerOne.addEventListener('click', changeItemByController)
controllerTwo.addEventListener('click', changeItemByController)
controllerThree.addEventListener('click', changeItemByController)