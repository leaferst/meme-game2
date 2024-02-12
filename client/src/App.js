import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppContext, initAppObject } from './store/appContext';
import appReducer from './store/appReducer';
import Captions from './pagecomponents/Captions';
import './App.css';

function App() {
  let [app, setApp] = useReducer(appReducer) initAppObject
;

  return (
    <AppContext.Provider value={{App, SetApp}}>
      <div className="App">
          <h2>Meme Game</h2>
          <Captions />
          <Routes>
            <Route />
            <Route />
          </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

