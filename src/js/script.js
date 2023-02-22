const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    closeLink = document.querySelector('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeLink.addEventListener('click' , () => {
    menu.classList.remove('active');
});

closeElem.addEventListener('click' , () => {
    menu.classList.remove('active');
});