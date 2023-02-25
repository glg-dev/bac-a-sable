import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { documentTitle } from '..';
import BackHomeArrow from '../components/BackHomeArrow';

const Stars = () => {

  const [stars, setStars] = useState([])

  useEffect(() => {
    document.title = `${documentTitle} - Sky by night`
  }, [])


  function makeAStar() {
    const size = Math.random() * 2 + 'px'
    const colors = [ '#8CBFDB', '#303e8c', '#4369d9', '#1f1f26', '#9ad2df', '#333259', '#302f40' ];
    const index = Math.floor(Math.random() * colors.length)

    const Star = styled.span`
    position: absolute;
    border-radius: 50%;
    height: ${size};
    width: ${size};
    background: ${colors[index]};
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    `

    let star = <Star key={Math.random()}/>
    setStars([...stars, star])

    const timeout = setTimeout(() => {
      setStars((oldStars) => oldStars.filter(oldstar => oldstar !== star))
    }, 16000)
    return () => clearTimeout(timeout)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      makeAStar()
    }, 5)
    return () => clearInterval(interval)
  }, [stars])
  
  return (
    <>
      <BackHomeArrow />
      <div className='stars'>
        {stars}
      </div>
    </>
  );
};

export default Stars;