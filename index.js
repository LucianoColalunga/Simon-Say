document.addEventListener('DOMContentLoaded', () => {

    const colors = ['blue', 'green', 'yellow', 'red'];

    let gameSequence = [];
    let playerSequence = [];
    let round = 0;

    const startButton = document.getElementById('start');
    const roundDisplay = document.getElementById('round');
    const colorButtons = colors.map(color => document.getElementById(color));

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
            }, delay);
            delay += 1000;
        });
    }

    function handleColorClick(event) {
        const color = event.target.id;
        playerSequence.push(color);
        animateColor(color);
        checkPlayerMove();
    }

    function checkPlayerMove() {
        const currentMoveIndex = playerSequence.length - 1;
        if (playerSequence[currentMoveIndex] !== gameSequence[currentMoveIndex]) {
            alert('Game Over! You reached round ' + round);
            startGame(); // Reiniciar el juego
            return;
        }
        if (playerSequence.length === gameSequence.length) {
            setTimeout(nextRound, 1000);
        }
    }

    function animateColor(color) {
        const button = document.getElementById(color);
        button.style.opacity = 1;  // Aumenta la opacidad a 1
        setTimeout(() => {
            button.style.opacity = 0.5;  // Restaura la opacidad a 0.5 después de 500ms
        }, 500);
    }

});

console.log();