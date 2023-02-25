import React from 'react';
import { Link } from 'react-router-dom';
import { documentTitle } from '..';

const BackHomeArrow = () => {

  const handleClick = () => {
    document.title = documentTitle
  }

  return (
    <Link to="/" className='back-home-arrow' onClick={() => handleClick()}>
      <i className="fas fa-sign-out-alt"></i>
    </Link>
      
  );
};

export default BackHomeArrow;