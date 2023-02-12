import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ project }) => {

  const { picture, title, route } = project
  
  return (
    <div className="card-wrapper">
      <Link to={route}>
        <div className='card'>
          <img src={picture} alt={title} />
          <h1>{title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Card;