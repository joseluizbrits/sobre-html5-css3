const images = document.querySelectorAll('img')
const div = document.querySelector('div')
let x = 0

function changeImages () {
    let width = div.clientWidth
    x += width
    
    if (x > (2 * width)) {
        x = 0
    }

    images.forEach(img => {
        img.style.transform = `translateX(-${x}px)`
    });
}

function iniciar() {
    setInterval(changeImages, 3000)
}

window.addEventListener('load', iniciar)