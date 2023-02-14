import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ project }) => {

  const [isHovered, setIsHovered] = useState(false)
  const { picture, title, route, languagesIcons, description } = project
  
  return (
    <div 
      className="card-wrapper" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={route} target="_blank">
        <div className='card'>
          <img src={picture} alt={title} />
          <h3>{title}</h3>
        </div>
        {
          isHovered && (
            <section className="infos">
              {
                languagesIcons && (
                  <div className="icons">
                    {
                      languagesIcons.map((icon) => <i className={icon} key={icon}></i>)
                    }
                  </div>
                )
              }
              {description && <p className='text'>{description}</p>}
            </section>
          )
        }
      </Link>
    </div>
  );
};

export default Card;