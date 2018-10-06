let randNum = Math.floor(Math.random() * 100) +  1;

let guesses = document.querySelector('.guesses');
let lr = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;


guessField.focus();

function checkGuess() {
  let ug = Number(guessField.value);
  if (guessCount === 1 ) {
    guesses.textContent = 'Previous guesses: ' ;
  }

  guesses.textContent += ug + ' ';

  if (ug === randNum) {
     lr.textContent = 'Congratulations! You got it right!';
     lr.style.backgroundColor = 'green';
     lowOrHi.textContent = '';
     setGameOver();
  } else if (guessCount === 10) {
    lr.textContent = '!!!!GAME OVER!!!!'
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lr.textContent = "WRONG!!";
    lr.style.backgroundColor = 'red';
    if (ug < randNum) {
      lowOrHi.textContent = 'Last guess was too low:';
    } else if (ug > randNum) {
      lowOrHi.textContent = 'Last guess was too high...'
    }
  }


  guessCount++;
  guessField.value = '';
  guessField.focus();
}


guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventlistener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  
  
  
  let resetParas = document.querySelectorAll('.resultParas p');

  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lr.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
