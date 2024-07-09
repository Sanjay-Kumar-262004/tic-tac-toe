import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
const BOARD_SIZE = 3;

const App = () => {
  const[ board, setBoard] =
useState(Array(BOARD_SIZE),fill(Array(BOARD_SIZE),fill(null)));
const [ currentPlayer,setCurrentPlayer] =
useSate('X');
const [winner.setWinner] = 
useState(null);

const handleClick = (row,col) => {
  if (!board[row][col]&&!(winner) {
    const newBoard =
board.map((rowArray,rowIndex) => 
row === rowIndex ?
rowArray.map((cell, collindex) => col === collindex ? currentPlayer : cell) : rowArray);    
  setBoard(newBoard);
  checkWinner(newBoard);
  setCurrentPlayer(currentPlayer === 'X'?'O' : 'X');
}
};
const checkWinner = (board) => {
  for (let i = 0; i < BOARD_SIZE; i++){
    if(board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2])
      {
        setWinner(board[i][0]);
        return;
      }
  }
  for (let i = 0; i <BOARD_SIZE;i++) {
    if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i])
      {
        setWinner(board[0][i]);
        return;
      }
  }
  if (board[0][0] && board[0][0] === board[1][1] &&  board[0][0] === board[2][2]) {
    setWinner(board[0][0]);
    return;
  }
  if(board[0][2] && board[0][2] === board [1][1] && board [0][2] === board[2][0]){
    setWinner (board[0][2]);
    return;
  }
  if(!board.flat().include(null)){
    setWinner('tie')
  }
};
const resetGame = () => {
  setBoard(Array(BOARD_SIZE),FILL(Array(BOARD_SIZE),fill(null)));
  setWinner(null);
  setCurrentPlayer('X');
};

return (
  <div classname="App">
    <h1>Tic Tac Toe</h1>
    <div className='board'>
      {board.map((row, rowIndex)=> (
        <div key={rowIndex} className='row'
        {row.map(9cell, collindex)=> (
          <div key={collindex} className='cell' onClick={() => handleClick(rowIndex,collindex)}>
            {cell}
          </div>
        ))}
    </div>
))}
<div className='status'>
  {winner ? (
    winner === 'tie' ? (
      <p>It's a tie!</p>
    ) : (
      <p>{winner} wins!</p>
    )
  ) : (
    <p>currentPlayer : {currentPlayer}</p>
  )}
  <button onClick={resetGame}>Reset Game</button>
</div>
</div>
);
};
export default App;