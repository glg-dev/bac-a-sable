import React, { useState } from 'react';
import { documentTitle } from '..';
import BackHomeArrow from '../components/BackHomeArrow';

const RotatingCube = () => {

  const [animation, setAnimation] = useState("cube-spin 1500s infinite linear")
  const [transform, setTransform] = useState(null)
  const [transition, setTransition] = useState(null)
  
  document.title = `${documentTitle} - Rotating Cube`

  const cubeStyle = {
    animation: animation,
    transform: transform,
    transition: transition
  }

  const handleMouseMove = (e) => {
    let rotY = e.clientX / 1.8
    let rotZ = e.clientY / 1.8
    
    setAnimation("none")
    setTransform(`rotateY(${rotY}deg) rotateZ(${rotZ}deg)`)
    setTransition(".5s ease-out")
  }

  return (
    <div className='rotating-cube'>
      <BackHomeArrow />
      <h1>Ceci n'est pas de la 3D</h1>
      
      <main className="container" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={() => setAnimation("cube-spin 1500s infinite linear")}>
        <div className="circle-container circle-1">
        </div>
        <div className="circle-container circle-2">
        </div>
        <div className="cube" style={cubeStyle}>
          <div className="side" id="front"></div>
          <div className="side" id="bottom"></div>
          <div className="side" id="top"></div>
          <div className="side" id="left"></div>
          <div className="side" id="right"></div>
          <div className="side" id="back"></div>
        </div>
      </main>

    </div>
  );
};

export default RotatingCube;