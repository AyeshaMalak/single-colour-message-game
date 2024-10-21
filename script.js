let targetColor;

function startGame() {
    targetColor = generateRandomColor();
    document.getElementById('colorBox').style.backgroundColor = targetColor;
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('guessInput').value = '';
    document.querySelector('.play-again').style.display = 'none';
}

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function checkGuess() {
    const guess = document.getElementById('guessInput').value.trim();
    if (guess.toLowerCase() === targetColor.toLowerCase()) {
        document.getElementById('resultMessage').textContent = 'Correct! You guessed the color!';
    } else {
        document.getElementById('resultMessage').textContent = 'Wrong guess! Try again.';
    }
    document.querySelector('.play-again').style.display = 'block';
}

// Start the game when the page loads
window.onload = startGame;
