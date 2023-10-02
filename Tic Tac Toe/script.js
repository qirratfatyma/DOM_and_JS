let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const cells = document.querySelectorAll('.cell');
const winnerMessage = document.getElementById('winner');

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            winnerMessage.innerText = `${currentPlayer} Loses!`;
        }
    }

    if (!gameBoard.includes('') && gameActive) {
        gameActive = false;
        winnerMessage.innerText = "It's a draw!";
    }
}

function makeMove(cell) {
    const cellIndex = [...cells].indexOf(cell);
    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        cell.innerText = currentPlayer;
        cell.classList.add(currentPlayer);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
}

function resetBoard() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    winnerMessage.innerText = '';
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('X', 'O');
    });
}

cells.forEach(cell => cell.addEventListener('click', () => makeMove(cell)));

