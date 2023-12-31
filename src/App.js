import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Menu from './UI/Components/Menu.js';
import InventoryMenu from './UI/Menus/InventoryMenu';
import EquipmentMenu from './UI/Menus/EquipmentMenu';
import Home from './UI/Scenes/Locations/Home.js';
import Forest from './UI/Scenes/Locations/Forest.js';
import ForestInterior from './UI/Scenes/Locations/ForestInterior.js';
import StoneQuarry from './UI/Scenes/Locations/StoneQuarry.js';
import PassOut from './UI/Scenes/Locations/PassOut.js';
import PassOutFucked from './UI/Scenes/Locations/PassOutFucked.js';
import Crafting from './UI/Scenes/Crafting.js';
import Encounter from './UI/Scenes/Encounter.js';
import Intercourse from './UI/Scenes/Intercourse.js';
import Game from './Engine/Game.js';

function App() {
  const game = new Game();

  const [scene, setScene] = useState({name: 'home', prevScene: 'home'});
  const [invOpen, setInvOpen] = useState(false);
  const [eqpOpen, setEqpOpen] = useState(false);

  const scenes = {
    'home': <Home game={game} setScene={setScene} prevScene={scene.prevScene}/>,
    'forest': <Forest game={game} setScene={setScene} prevScene={scene.prevScene}/>,
    'forestInterior': <ForestInterior game={game} setScene={setScene} prevScene={scene.prevScene}/>,
    'stoneQuarry': <StoneQuarry game={game} setScene={setScene} prevScene={scene.prevScene}/>,
    'passOut': <PassOut game={game} setScene={setScene} prevScene={scene.prevScene}/>,
    'passOutFucked': <PassOutFucked game={game} setScene={setScene} prevScene={scene.prevScene} />,
    'crafting': <Crafting game={game} setScene={setScene} prevScene={scene.prevScene} />,
    'encounter': <Encounter game={game} setScene={setScene} prevScene={scene.prevScene}/>,
    'intercourse': <Intercourse game={game} setScene={setScene} prevScene={scene.prevScene}/>
  }

  return (
    <div className="App">
      <div className="App-header">
        <Menu game={game} setScene={setScene} scene={scene} setInvOpen={setInvOpen} setEqpOpen={setEqpOpen} invOpen={invOpen} eqpOpen={eqpOpen} />
        {invOpen && <InventoryMenu game={game} setInvOpen={setInvOpen}/>}
        {eqpOpen && <EquipmentMenu game={game} setEqpOpen={setEqpOpen}/>}
        {scenes[scene.name]}
      </div>
    </div>
  );
}

export default App;
