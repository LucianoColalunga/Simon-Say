document.addEventListener('DOMContentLoaded', () => {

    const colors = ['blue', 'green', 'yellow', 'red'];

    let gameSequence = [];
    let playerSequence = [];
    let round = 0;

    const startButton = document.querySelector('start');
    const roundDisplay = document.querySelector('round');
    const colorButtons = colors.map(color => document.querySelector(color));

    startButton.addEventListener('click', startGame);

    colorButtons.forEach(button => button.addEventListener('click', handleColorClick));

    function startGame() {
        gameSequence = [];
        playerSequence = [];
        round = 0;
        nextRound();
    }

    function nextRound() {
        playerSequence = [];
        round++;
        roundDisplay.textContent = `Round ${round}`;
        const nextColor = colors[Math.floor(Math.random() * colors.length)];
        gameSequence.push(nextColor);
        playSequence();
    }

    function playSequence() {
        let delay = 0;
        gameSequence.forEach((color, index) => {
            setTimeout(() => {
                animateColor(color);
                playSound(color);
            }, delay);
            delay += 1000;
        });
    }

    function handleColorClick(event) {
        const color = event.target.id;
        playerSequence.push(color);
        animateColor(color);
        playSound(color);
        checkPlayerMove();
    }

    function checkPlayerMove() {
        const currentMoveIndex = playerSequence.length - 1;
        if (playerSequence[currentMoveIndex] !== gameSequence[currentMoveIndex]) {
            alert('Game Over! You reached round ' + round);
           
            startGame(); 
            return;
        }
        if (playerSequence.length === gameSequence.length) {
            setTimeout(nextRound, 1000);
        }
    }

    function animateColor(color) {
        const button = document.getElementById(color);
        button.style.opacity = 1;  
        setTimeout(() => {
            button.style.opacity = 0.5;  
        }, 500);
    }

});


const audioBlue = new Audio('blue.mp3');
const audioGreen = new Audio('green.mp3');
const audioRed = new Audio('red.mp3');
const audioYellow = new Audio('yellow.mp3');
const audioError = new Audio('error.mp3');
const audioWin = new Audio('win.mp3');

function playSound(color) {
    switch (color) {
        case 'blue':
            audioBlue.play();
            break;
        case 'green':
            audioGreen.play();
            break;
        case 'red':
            audioRed.play();
            break;
        case 'yellow':
            audioYellow.play();
            break;
        case 'error':
            audioError.play();
            break;
        case 'win':
            audioWin.play();
            break;
        default:
            console.log(`Sound for color ${color} not found.`);
            break;
    }
}
   