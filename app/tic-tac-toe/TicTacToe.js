import React, { useState } from 'react';

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner 
    ? `Winner: ${winner}`
    : squares.every(square => square)
    ? "Game is a draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-8 text-4xl font-bold text-gray-800">Tic-Tac-Toe</div>
      
      <div className="mb-4 text-xl font-semibold text-gray-700">{status}</div>
      
      <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-lg">
        {squares.map((square, i) => (
          <button
            key={i}
            className={`
              w-20 h-20 text-4xl font-bold
              bg-gray-50 hover:bg-gray-100
              border-2 border-gray-200
              rounded-lg transition-colors
              focus:outline-none focus:ring-2 focus:ring-blue-500
              ${square === 'X' ? 'text-blue-600' : 'text-red-600'}
            `}
            onClick={() => handleClick(i)}
          >
            {square}
          </button>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg
                 hover:bg-blue-600 transition-colors
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;