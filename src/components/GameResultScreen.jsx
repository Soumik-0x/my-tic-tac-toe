import React from 'react';
import '../styles/GameResultScreen.css';

const GameResultScreen = ({ winner }) => {
  return (
    <div className="game-result-screen">
      <h2>{winner} wins!</h2>
    </div>
  );
};

export default GameResultScreen;
