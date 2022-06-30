const burgerOpenBtn = document.querySelector('.burger-menu-btn');
const burgerMenu = document.querySelector('.burger-menu-container');
const burgerCloseBtn = document.querySelector('.burger-menu-btn__close');
burgerOpenBtn.addEventListener('click',function openBurgerMenu(){
    burgerMenu.style.height = '100px';
    burgerMenu.style.position = 'absolute';
})

burgerCloseBtn.addEventListener('click',function openBurgerMenu(){
    burgerMenu.style.height = '0%';
})
