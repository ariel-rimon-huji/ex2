"use client"

import styles from "./page.module.css"
import { useState } from "react"

export default function TicTacToePage() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return
    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? "X" : "O"
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares)
  const status = winner 
    ? `Winner: ${winner}` 
    : squares.every(square => square) 
    ? "Game is a draw!"
    : `Next player: ${xIsNext ? "X" : "O"}`

  return (
    <main className={styles.container}>
      <div className={styles.game}>
        <div className={styles.title}>Tic-Tac-Toe</div>
        <div className={styles.status}>{status}</div>
        <div className={styles.board}>
          {squares.map((square, i) => (
            <button key={i} className={styles.square} onClick={() => handleClick(i)}>
              {square}
            </button>
          ))}
        </div>
        <button className={styles.resetButton} onClick={() => setSquares(Array(9).fill(null))}>
          Reset Game
        </button>
      </div>
    </main>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}