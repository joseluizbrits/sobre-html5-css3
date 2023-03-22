const navbarLinks = document.querySelectorAll('.navbar__link')

function showDropdown({ target }) {
    const dropdown = target.children[2]
    dropdown.classList.add('active')
}

function removeDropdown({ target }) {
    const dropdown = target.children[2]
    dropdown.classList.remove('active')
}

navbarLinks.forEach(link => {
    link.addEventListener('mouseenter', link => showDropdown(link))
    link.addEventListener('mouseleave', link => removeDropdown(link))
})