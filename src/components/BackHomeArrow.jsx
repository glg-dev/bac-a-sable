import React from 'react';
import { Link } from 'react-router-dom';

const BackHomeArrow = () => {
  return (
    <Link to="/" className='back-home-arrow'>
      <i class="fas fa-sign-out-alt"></i>
    </Link>
      
  );
};

export default BackHomeArrow;