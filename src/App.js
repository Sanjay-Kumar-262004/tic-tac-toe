import React, { useState } from 'react';
import './App.css';

const BOARD_SIZE = 3;

const App = () => {
  const [board, setBoard] = useState(Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (row, col) => {
    if (!board[row][col] && !winner) {
      const newBoard = board.map((rowArray, rowIndex) => 
        rowIndex === row ? 
          rowArray.map((cell, colIndex) => colIndex === col ? currentPlayer : cell) 
          : rowArray
      );    
      setBoard(newBoard);
      checkWinner(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = (board) => {
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        setWinner(board[i][0]);
        return;
      }
    }
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        setWinner(board[0][i]);
        return;
      }
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      setWinner(board[0][0]);
      return;
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      setWinner(board[0][2]);
      return;
    }
    if (!board.flat().includes(null)) {
      setWinner('tie');
    }
  };

  const resetGame = () => {
    setBoard(Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null)));
    setWinner(null);
    setCurrentPlayer('X');
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className='board'>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className='row'>
            {row.map((cell, colIndex) => (
              <div key={colIndex} className='cell' onClick={() => handleClick(rowIndex, colIndex)}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='status'>
        {winner ? (
          winner === 'tie' ? (
            <p>It's a tie!</p>
          ) : (
            <p>{winner} wins!</p>
          )
        ) : (
          <p>Current Player: {currentPlayer}</p>
        )}
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};

export default App;
