const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition
let currentTime = 30;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
};

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        };
    });
});

function moveMole() {
    timerId = setInterval(randomSquare, 1000)
}

moveMole();

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
        alert('The new game starts in a few seconds');
        setTimeout(() => 2000);
        setTimeout(()=> {
            location.reload()}, 2000);
    }
}

let countDownTimerId = setInterval(countDown, 1000)
