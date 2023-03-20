const btnMenu = document.querySelector('#btn-mobile')
const navbar = document.querySelector('#navbar')

btnMenu.addEventListener('click', () => {
    navbar.classList.toggle('active')
})