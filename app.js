const Gameboard = (() => {
  const cells = document.querySelectorAll('.cell');
  const handleClick = (e) => {
    console.log(e.target);
  };

  cells.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true });
  });
})();
