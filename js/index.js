const menuBtn = document.querySelector('.nav-panel__menu-btn')
const menuList = document.querySelector('.nav-panel__list')
const homeLink = document.querySelector('.nav-panel__home')
const navPanel = document.querySelector('.nav-panel')

menuBtn.addEventListener('click', toggleMenu)


function toggleMenu() {
    if (menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active')
        menuList.classList.remove('active')
    } else {
        menuBtn.classList.add('active') 
        menuList.classList.add('active') 
    }
}
function closeMenu() {
    if (menuBtn.classList.contains('active')) {
        menuList.classList.remove('active')
        menuBtn.classList.remove('active')
    }
}

menuList.addEventListener('click', closeMenu)
homeLink.addEventListener('click', closeMenu)

/*
window.onscroll = function() {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (posTop === 0) {
        navPanel.classList.add('transparent') 
    } else {
        navPanel.classList.remove('transparent')        
    }
}
*/