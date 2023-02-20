import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import { Randomizertable, Clock } from './randomizer/Rando';

function App() {
  return (
    <div className="App">
      <Randomizertable />
      <Clock/>
    </div>
  );
};

export default App;