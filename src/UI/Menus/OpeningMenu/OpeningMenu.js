import {useState} from 'react';
import eye_open from '../../Images/eye_open.png';
import eye_closed from '../../Images/eye_closed.png'
import grumpy_icon from '../../Images/grumpy_icon.png';
import Number from '../../Components/Number.js';
import BeastButton from './Components/BeastButton.js';
import ShopButton from './Components/ShopButton.js';
import IncreMath from '../../../Utils/IncreMath.js';

const numbers = new IncreMath();

export default function OpeningMenu({game}) {
  const [awareness, setAwareness] = useState(game.gameData.currency.awareness);
  const [playerHp, setPlayerHp] = useState(game.gameData.stats.playerHp);
  const [beastHp, setBeastHp] = useState(game.gameData.stats.beastHp);
  const [beastDefence, setBeastDefence] = useState(game.gameData.stats.beastDefence);
  const [gold, setGold] = useState(game.gameData.currency.gold);
  const [isAwake, setIsAwake] = useState(game.gameData.effects.isAwake);

  const handlePoke = () => {
    game.addAwareness(game.gameData.stats.pokePower);
    setAwareness(game.gameData.currency.awareness);
    if(numbers.getRandomChance(0.25)) {
      game.addGold(1);
      setGold(game.gameData.currency.gold);
    }
    if(game.gameData.currency.awareness.greaterThanOrEqualTo(game.gameData.stats.awarenessToWake)) {
      handle_awakening();
    }
  }

  const handleAttack = () => {
    game.damageBeast(game.gameData.stats.atkPower);
    setBeastHp(game.gameData.stats.beastHp);
    setBeastDefence(game.gameData.stats.beastDefence);
    setGold(game.gameData.currency.gold);
  }

  const handle_grumpy_poke = () => {
    game.subtractAwareness(10);
    game.gameData.stats.beastDefence.greaterThan(0) &&
    game.damageBeast(game.gameData.stats.atkPower);
    setBeastDefence(game.gameData.stats.beastDefence);
    setAwareness(game.gameData.currency.awareness);
  }

  const handle_awakening = () => {
    game.awakenBeast();
    const refreshInterval = setInterval(() => {
      setAwareness(game.gameData.currency.awareness);
      setPlayerHp(game.gameData.stats.playerHp);
      setIsAwake(game.gameData.effects.isAwake);
      if(!game.gameData.effects.isAwake) {
        clearInterval(refreshInterval);
      }
    }, 100)
  }

  return (
    <div>
      <p>Beast HP: <Number value={beastHp} /></p>
      <p>Beast Defence: <Number value={beastDefence} /></p>
      <div style={{display: 'inline-block'}}>
        <img src={isAwake ? eye_open : eye_closed} />
        {
          awareness >= 10 && awareness < 100 &&
          <img
            style={{position: 'absolute'}}
            src={grumpy_icon}
            onClick={()=>{handle_grumpy_poke()}}
          />
        }
      </div>
        <p>Current Awareness: <Number value={awareness} /></p>
        <br />
        {isAwake ?
          <BeastButton type='attack' onPress={handleAttack} /> :
          <BeastButton type='poke' onPress={handlePoke} />
        }
        <br />
        <div style={{display: 'inline-block', width:'100%'}}>
          <ShopButton
            label='Upgrade Poke'
            statName='pokePower'
            priceName='pokeUpgrade'
            setGold={setGold}
            game={game}
          />
          <ShopButton
            label='Upgrade Attack'
            statName='atkPower'
            priceName='atkUpgrade'
            setGold={setGold}
            game={game}
          />
          <p>Your HP: <Number value={playerHp} /></p>
          <p>Your Gold: <Number value={gold} /></p>
        </div>
    </div>
  )
}
