'use strict';

// document.querySelector('.guess').value = 16;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20



 document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // document.querySelector('.guess').value = 'Correct Answer'

    //when there is no input
    if(!guess) {
        document.querySelector('.message').textContent = '❌ No Number';
    }
    
    // when player wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number';

        document.querySelector('body').style.backgroundColor = '#59C55E';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
    } 
    //when guess is too high
    else if (guess > secretNumber) {
        if(score > 1) {
        document.querySelector('.message').textContent = '📈 Too High';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '💥 You Lost The Game!' 
    };
    } 
    
    //when guess is too high
    else if (guess < secretNumber) {
        if(score > 1) {
        document.querySelector('.message').textContent = '📉 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '❔ Something Went Wrong!' 
    }
    } 
 });



    document.querySelector('.again').addEventListener('click', function() {
        score = 20;
        secretNumber =  Math.trunc(Math.random()*20)+1;

        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    })