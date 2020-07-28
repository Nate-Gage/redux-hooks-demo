import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ToggleName from './components/ToggleName';
import Squares from './components/Squares';
import Announcement from './components/Announcement';

function App() {
  return (
    <div className="App">
      <Counter />
      <ToggleName />
      <Squares />
      <Announcement />
    </div>
  );
}

export default App;
