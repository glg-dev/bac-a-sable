import React, { useEffect } from 'react';
import Board from './Board';

const Game = () => {

  useEffect(() => {
    document.title = "Tic Tac Toe"
  }, [])
  
  return (
    <div className='game'>
        <Board />
    </div>
  );
};

export default Game;