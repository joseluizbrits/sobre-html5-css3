const btnMobile = document.querySelector('#btn-mobile')

const toggleMenu = (event) => {
    // impedindo de ocorrer um evento duplo
    if (event.type === 'touchstart') event.preventDefault()

    // inserindo ou retirando a class active do menu
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')

    // ACESSIBILIDADE
    // verificando se o menu esta com a class active
    const active = nav.classList.contains('active') // retornará false ou true

    // mudando um atributo de acessibilidade para false ou true
    event.currentTarget.setAttribute('aria-expanded', active)

    // mudando outro atributo de acessibilidade
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu) // web
btnMobile.addEventListener('touchstart', toggleMenu) // mobile
// o evento touchstart também aciona o evento click, portanto quando for acionado irá ocorrer um evento duplo