/*(function(){
    const header = document.querySelector('.header_nav');
    window.onscroll = () => {
        if(window.pageYOffset > 50){
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}()); */
// Burger handler

(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav__list');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.nav__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav__list_active');
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav__list_active');
    })
    if(window.innerWidth <= 768){
        for(let i = 0; i < menuLinks.length; i += 1){
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('nav__list_active');
            })
        }
    }
}())