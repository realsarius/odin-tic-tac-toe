const Gameboard = (() => {
  const gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const cells = document.querySelectorAll('.cell');
  const gameOverModal = document.querySelector('#gameOverModal');
  const resetBtn = document.querySelector('#resetBtn');
  const winnerName = document.querySelector('#winnerName');
  const inputInterface = document.querySelector('#inputInterface');
  const playerNameBtn = document.querySelector('#playerNameBtn');
  const playerNameInput = document.querySelector('#playerName');
  const start = document.querySelector('#start');

  let turn = true;
  let checkDraw = 0;
  let playerName = '';

  (() => {
    inputInterface.style.display = 'flex';
    playerNameBtn.addEventListener('click', () => {
      start.textContent = `${playerNameInput.value} starts first`;
      playerName = playerNameInput.value;
      inputInterface.style.display = 'none';
    });
  })();

  const switchTurn = () => {
    turn = !turn;
  };

  const endGame = () => {
    checkDraw += 1;
    if (
      (gameboard[0] === 'x' && gameboard[1] === 'x' && gameboard[2] === 'x') ||
      (gameboard[0] === 'o' && gameboard[1] === 'o' && gameboard[2] === 'o')
    ) {
      if (gameboard[0] === 'x') {
        winnerName.textContent = `${playerName} Wins`;
        gameOverModal.style.display = 'flex';
      } else {
        winnerName.textContent = `${playerName} Loses`;
        gameOverModal.style.display = 'flex';
      }
    }
    if (
      (gameboard[3] === 'x' && gameboard[4] === 'x' && gameboard[5] === 'x') ||
      (gameboard[3] === 'o' && gameboard[4] === 'o' && gameboard[5] === 'o')
    ) {
      if (gameboard[3] === 'x') {
        winnerName.textContent = `${playerName} Wins`;
        gameOverModal.style.display = 'flex';
      } else {
        winnerName.textContent = `${playerName} Loses`;
        gameOverModal.style.display = 'flex';
      }
    }
    if (
      (gameboard[6] === 'x' && gameboard[7] === 'x' && gameboard[8] === 'x') ||
      (gameboard[6] === 'o' && gameboard[7] === 'o' && gameboard[8] === 'o')
    ) {
      if (gameboard[6] === 'x') {
        winnerName.textContent = `${playerName} Wins`;
        gameOverModal.style.display = 'flex';
      } else {
        winnerName.textContent = `${playerName} Loses`;
        gameOverModal.style.display = 'flex';
      }
    }
    if (
      (gameboard[0] === 'x' && gameboard[3] === 'x' && gameboard[6] === 'x') ||
      (gameboard[0] === 'o' && gameboard[3] === 'o' && gameboard[6] === 'o')
    ) {
      if (gameboard[0] === 'x') {
        winnerName.textContent = `${playerName} Wins`;
        gameOverModal.style.display = 'flex';
      } else {
        winnerName.textContent = `${playerName} Loses`;
        gameOverModal.style.display = 'flex';
      }
    }
    if (
      (gameboard[1] === 'x' && gameboard[4] === 'x' && gameboard[7] === 'x') ||
      (gameboard[1] === 'o' && gameboard[4] === 'o' && gameboard[7] === 'o')
    ) {
      if (gameboard[1] === 'x') {
        winnerName.textContent = `${playerName} Wins`;
        gameOverModal.style.display = 'flex';
      } else {
        winnerName.textContent = `${playerName} Loses`;
        gameOverModal.style.display = 'flex';
      }
    }
    if (
      (gameboard[2] === 'x' && gameboard[5] === 'x' && gameboard[8] === 'x') ||
      (gameboard[2] === 'o' && gameboard[5] === 'o' && gameboard[8] === 'o')
    ) {
      if (gameboard[2] === 'x') {
        winnerName.textContent = `${playerName} Wins`;
        gameOverModal.style.display = 'flex';
      } else {
        winnerName.textContent = `${playerName} Loses`;
        gameOverModal.style.display = 'flex';
      }
    }
    if (
      (gameboard[0] === 'x' && gameboard[4] === 'x' && gameboard[8] === 'x') ||
      (gameboard[0] === 'o' && gameboard[4] === 'o' && gameboard[8] === 'o')
    ) {
      if (gameboard[0] === 'x') {
        winnerName.textContent = `${playerName} Wins`;
        gameOverModal.style.display = 'flex';
      } else {
        winnerName.textContent = `${playerName} Loses`;
        gameOverModal.style.display = 'flex';
      }
    }
    if (
      (gameboard[2] === 'x' && gameboard[4] === 'x' && gameboard[6] === 'x') ||
      (gameboard[2] === 'o' && gameboard[4] === 'o' && gameboard[6] === 'o')
    ) {
      if (gameboard[2] === 'x') {
        winnerName.textContent = `${playerName} Wins`;
        gameOverModal.style.display = 'flex';
      } else {
        winnerName.textContent = `${playerName} Loses`;
        gameOverModal.style.display = 'flex';
      }
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
