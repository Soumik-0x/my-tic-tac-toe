import React from 'react';
import '../styles/RestartButton.css';

const RestartButton = ({ onClick }) => {
  return (
    <button className="restart-button" onClick={onClick}>
      Restart Game
    </button>
  );
};

export default RestartButton;
