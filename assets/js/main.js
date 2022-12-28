/*==================== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*================= MENU SHOW ==========*/
/* validation if constant existe */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*============= MENU HIDDEN =======*/
/* validation if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*============================== CHANGE BACKGROUND HEADER ===========*/
function scrollHeader() {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag 
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)