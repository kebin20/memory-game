function FourByFourGameBoard() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const circles = numbers.map((number) => (
    <div className="circles" key={number}>
      {number}
    </div>
  ));

  return <div className="game-board-container">{circles}</div>;
}

export default FourByFourGameBoard;