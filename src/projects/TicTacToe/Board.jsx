import React, { useEffect, useState } from 'react';
import Square from './Square';

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  const [isMulti, setIsMulti] = useState(false)
  const [noEmptySquare, setNoEmptySquare] = useState(false)

  useEffect(() => {
    let nullValues = []
    for (let i = 0; i < squares.length; i++) {
      const element = squares[i];
      if (element === null) {
        nullValues.push(i)
      }
    }
    if (!nullValues.length && !winner) {
      setNoEmptySquare(true)
    }
    if (!isMulti && !isX && !winner) {
      const randomNumber = Math.floor(Math.random() * nullValues.length )
      const randomIndex = nullValues[randomNumber]
      squares[randomIndex] = "O" 
      setIsX(!isX)
    } else {
      return
    }
  }, [isX])

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = isX ? "X" : "O"
    setSquares(squares)
    setIsX(!isX)
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />
  }

  function calculateWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  let soloOrMulti = isMulti ? "2 players" : "1 player"

  const winner = calculateWinner(squares)
  let status

  if (winner) {
    status = `Winner : ${winner} !`
  } else if (noEmptySquare) {
    status = "No Winner"
  } else {
    status = `Player : ${isX ? "X" : "O"}`
  }

  const handleRestart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
    setNoEmptySquare(false)
  }
  
  return (
    <div className='board'>
      <section className="infos">
        <div className="players">{soloOrMulti}</div>
        <div className={`status ${winner ? "winner" : isX ? "X" : "O"}`}>{status}</div>
      </section>
      <main className="board-table">
        <section className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </section>
        <section className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </section>
        <section className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </section>
      </main>
      <aside className="buttons">
        <button className='restart' onClick={handleRestart}>Restart</button>
        <div className="play-mode">
          <button className={ !isMulti ? 'active' : null} onClick={() => setIsMulti(false)}>Solo</button>
          <button className={ isMulti ? 'active' : null} onClick={() => setIsMulti(true)}>Multi</button>
        </div>
      </aside>
    </div>
  );
};

export default Board;