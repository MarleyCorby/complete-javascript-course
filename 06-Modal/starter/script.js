'use strict';
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);


    //button functionality on modal and on x onClick
for (let i =0; i < btnsOpenModal.length; i++)
console.log(btnsOpenModal[i].addEventListener
    ('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
    }))

    const closeModal = function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
btnCloseModal.addEventListener('click', closeModal );

    //functionality on overlay(clicking outside of modal to close it) click for closing modal
overlay.addEventListener('click', closeModal);