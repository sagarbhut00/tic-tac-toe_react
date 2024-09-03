function Square({value, onSquareClick}) {
    return (
    <button className="square" onClick={onSquareClick} style={{color: value == 'X' ? 'red' : 'blue'}}>{value}</button>
    )
  }

  export default Square;