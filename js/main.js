const btn = document.querySelector('.burger')
const menu = document.querySelector('.header__menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    menu.classList.toggle('active')
})