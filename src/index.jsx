import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import PasswordGenerator from './projects/PasswordGenerator';
import Stars from './projects/Stars';
import Game from './projects/TicTacToe/Game';
import './style/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/stars' element={<Stars />} />
        <Route exact path='/tictactoe' element={<Game />} />
        <Route exact path='/password-generator' element={<PasswordGenerator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
