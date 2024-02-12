import React, { useReducer } from 'react';
import {routes, Route } from 'react-router-dom';
import { AppContext, initAppObject } from './store/appContext';
import appReducer from './store/appReducer';
import Captions from './pagecomponents/Captions';
import './App.css';

function App() {


  return (
      <div className="App">
        <header className="App-header">
          <h2>Meme Game</h2>
          <div>
            <Captions />
          </div>
        </header>
      </div>
  );
}

export default App;

