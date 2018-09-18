import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import Clock from './components/Clock'


function App() {
  return (
    <div>
      <Game />
      <Clock />
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
  