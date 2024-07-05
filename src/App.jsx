import React, { useState } from 'react';
import Board from './components/Board';
import GameResultScreen from './components/GameResultScreen';
import DrawScreen from './components/DrawScreen';
import RestartButton from './components/RestartButton';
import AuthorInfo from './components/AuthorInfo';
import './styles/App.css';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (squares[index] || winner || isDraw) return;
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
    const newWinner = calculateWinner(newSquares);
    if (newWinner) {
      setWinner(newWinner);
    } else if (!newSquares.includes(null)) {
      setIsDraw(true);
    }
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <div className="app">
      <Board squares={squares} onClick={handleClick} />
      {winner && <GameResultScreen winner={winner} />}
      {isDraw && <DrawScreen />}
      <RestartButton onClick={restartGame} />
      <AuthorInfo />
    </div>
  );
};

export default App;
