import logo from './logo.svg';
import './App.css';
import OpeningMenu from './UI/Menus/OpeningMenu/OpeningMenu.js';
import Game from './Engine/Game.js';

function App() {
  const game = new Game();
  return (
    <div className="App">
      <div className="App-header">
        <OpeningMenu game={game}/>
      </div>
    </div>
  );
}

export default App;
