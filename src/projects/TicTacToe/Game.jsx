import React, { useEffect } from 'react';
import { documentTitle } from '../..';
import BackHomeArrow from '../../components/BackHomeArrow';
import Board from './Board';

const Game = () => {

  useEffect(() => {
    document.title = `${documentTitle} - Tic Tac Toe`
  }, [])
  
  return (
    <>
      <BackHomeArrow />
      <div className='game'>
          <Board />
      </div>
    </>
  );
};

export default Game;