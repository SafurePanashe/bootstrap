const menu = document.querySelector('.menu-btn');
const hd = document.querySelector('header');

menu.addEventListener('click',function(){
    hd.classList.toggle('open');
})