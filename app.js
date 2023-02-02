const Gameboard = (() => {
  const gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const cells = document.querySelectorAll('.cell');
  const gameOverModal = document.querySelector('#gameOverModal');
  const resetBtn = document.querySelector('#resetBtn');
  const winnerName = document.querySelector('#winnerName');

  let turn = true;
  let checkDraw = 0;

  const switchTurn = () => {
    turn = !turn;
  };

  const endGame = () => {
    checkDraw += 1;
    if (
      (gameboard[0] === 'x' && gameboard[1] === 'x' && gameboard[2] === 'x') ||
      (gameboard[0] === 'o' && gameboard[1] === 'o' && gameboard[2] === 'o')
    ) {
      winnerName.textContent = `${gameboard[0].toUpperCase()} Wins`;
      gameOverModal.style.display = 'flex';
    }
    if (
      (gameboard[3] === 'x' && gameboard[4] === 'x' && gameboard[5] === 'x') ||
      (gameboard[3] === 'o' && gameboard[4] === 'o' && gameboard[5] === 'o')
    ) {
      winnerName.textContent = `${gameboard[3].toUpperCase()} Wins`;
      gameOverModal.style.display = 'flex';
    }
    if (
      (gameboard[6] === 'x' && gameboard[7] === 'x' && gameboard[8] === 'x') ||
      (gameboard[6] === 'o' && gameboard[7] === 'o' && gameboard[8] === 'o')
    ) {
      winnerName.textContent = `${gameboard[6].toUpperCase()} Wins`;
      gameOverModal.style.display = 'flex';
    }
    if (
      (gameboard[0] === 'x' && gameboard[3] === 'x' && gameboard[6] === 'x') ||
      (gameboard[0] === 'o' && gameboard[3] === 'o' && gameboard[6] === 'o')
    ) {
      winnerName.textContent = `${gameboard[0].toUpperCase()} Wins`;
      gameOverModal.style.display = 'flex';
    }
    if (
      (gameboard[1] === 'x' && gameboard[4] === 'x' && gameboard[7] === 'x') ||
      (gameboard[1] === 'o' && gameboard[4] === 'o' && gameboard[7] === 'o')
    ) {
      winnerName.textContent = `${gameboard[1].toUpperCase()} Wins`;
      gameOverModal.style.display = 'flex';
    }
    if (
      (gameboard[2] === 'x' && gameboard[5] === 'x' && gameboard[8] === 'x') ||
      (gameboard[2] === 'o' && gameboard[5] === 'o' && gameboard[8] === 'o')
    ) {
      winnerName.textContent = `${gameboard[2].toUpperCase()} Wins`;
      gameOverModal.style.display = 'flex';
    }
    if (
      (gameboard[0] === 'x' && gameboard[4] === 'x' && gameboard[8] === 'x') ||
      (gameboard[0] === 'o' && gameboard[4] === 'o' && gameboard[8] === 'o')
    ) {
      winnerName.textContent = `${gameboard[0].toUpperCase()} Wins`;
      gameOverModal.style.display = 'flex';
    }
    if (
      (gameboard[2] === 'x' && gameboard[4] === 'x' && gameboard[6] === 'x') ||
      (gameboard[2] === 'o' && gameboard[4] === 'o' && gameboard[6] === 'o')
    ) {
      winnerName.textContent = `${gameboard[2].toUpperCase()} Wins`;
      gameOverModal.style.display = 'flex';
    }
    if (checkDraw === 9) {
      winnerName.textContent = `Draw`;
      gameOverModal.style.display = 'flex';
    }
  };

  resetBtn.addEventListener('click', () => {
    gameOverModal.style.display = 'none';
    window.location.reload();
  });

  const handleClick = (cell) => {
    const boardPlace = cell.target.getAttribute('data-place');
    if (turn) {
      cell.target.classList.add('x');
    } else {
      cell.target.classList.add('o');
    }
    gameboard.splice(boardPlace, 1, cell.target.classList[1]);
    endGame(cell);
    switchTurn();
  };

  cells.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true });
  });
})();
