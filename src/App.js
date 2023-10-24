import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Menu from './UI/Components/Menu.js';
import Home from './UI/Scenes/Locations/Home.js';
import Forest from './UI/Scenes/Locations/Forest.js';
import PassOut from './UI/Scenes/Locations/PassOut.js';
import PassOutFucked from './UI/Scenes/Locations/PassOutFucked.js';
import Encounter from './UI/Scenes/Encounter.js';
import Intercourse from './UI/Scenes/Intercourse.js';
import Game from './Engine/Game.js';

function App() {
  const game = new Game();

  const [scene, setScene] = useState('home');

  const scenes = {
    'home': <Home game={game} setScene={setScene} />,
    'forest': <Forest game={game} setScene={setScene} />,
    'passOut': <PassOut game={game} setScene={setScene} />,
    'passOutFucked': <PassOutFucked game={game} setScene={setScene} />,
    'encounter': <Encounter game={game} setScene={setScene} />,
    'intercourse': <Intercourse game={game} setScene={setScene} />
  }

  return (
    <div className="App">
      <div className="App-header">
        <Menu game={game} setScene={setScene} scene={scene} />
        {scenes[scene]}
      </div>
    </div>
  );
}

export default App;
