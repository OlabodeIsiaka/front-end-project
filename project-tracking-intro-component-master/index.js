// variables
const toggleBtn = document.querySelector('.toggle-btn')
const closeBtn = document.querySelector('.close');
const openBtn = document.querySelector('.open');
const navMenu = document.querySelector('.nav-menu');
console.log(navMenu, toggleBtn, closeBtn, openBtn);
toggleBtn.addEventListener('click', function(){
   openBtn.classList.toggle('hidden');
   navMenu.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
});

