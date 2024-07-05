import React from 'react';
import '../styles/Square.css';

const Square = ({ value, onClick }) => {
  const style = value ? `square ${value}` : 'square';
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
