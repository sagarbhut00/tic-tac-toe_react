import './App.css';
import { useState } from "react";

function Square({value, onSquareClick}) {
  return (
  <button className="square" onClick={onSquareClick}>{value}</button>
  )
}
function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(true);

  function handleClick(i) {
    if(squares[i] || calculateWinner()) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = isXNext ? 'X' : 'O';
    setSquares(nextSquares);
    setisXNext(!isXNext);
  }
  
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is : " + winner;
  } else {
    let move = isXNext ? 'X' : 'O';
    status = "Next move : " + move;
  }
  return (
    <>
    <div>{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
    </>
  );

  function calculateWinner() {
    const winLines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let i = 0; i < winLines.length; i++) {
      const [x, y, z] = winLines[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]){
        return squares[x];
      }
    }
    return null;
  }
}

export default App;
