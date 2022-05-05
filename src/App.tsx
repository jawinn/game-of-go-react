import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <div className="App">
      <Board boardSize={9}></Board>
    </div>
  );
}

export default App;
