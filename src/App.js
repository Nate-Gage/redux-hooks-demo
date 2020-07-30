import React from 'react';
import './App.css';
import CounterWrapper from './components/Counter/Counter';
import ToggleName from './components/ToggleName/ToggleName';
import Squares from './components/Square/Squares';
import AnnouncementWrapper from './components/Announcement/Announcement';

function App() {
  return (
    <div className="App">
      <CounterWrapper />
      <ToggleName />
      <Squares />
      <AnnouncementWrapper />
    </div>
  );
}

export default App;
