import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Home from './UI/Scenes/Home.js';
import Forest from './UI/Scenes/Forest.js';
import Game from './Engine/Game.js';

function App() {
  const game = new Game();

  const [scene, setScene] = useState('home');

  const scenes = {
    'home': <Home game={game} setScene={setScene} />,
    'forest': <Forest game={game} setScene={setScene} />
  }

  return (
    <div className="App">
      <div className="App-header">
        {scenes[scene]}
      </div>
    </div>
  );
}

export default App;
