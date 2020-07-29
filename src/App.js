import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import ToggleName from './components/ToggleName/ToggleName';
import Squares from './components/Square/Squares';
import Announcement from './components/Announcement/Announcement';

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
