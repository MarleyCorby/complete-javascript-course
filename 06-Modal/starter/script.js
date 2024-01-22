'use strict';
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

for (let i =0; i < btnsOpenModal.length; i++)
console.log(btnsOpenModal[i].addEventListener
    ('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
    }))

btnCloseModal.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});