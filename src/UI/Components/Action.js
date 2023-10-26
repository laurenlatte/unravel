import Button from './Button.js'
import * as TextStyles from './TextStyles.js';
import IncreMath from '../../Utils/IncreMath.js';

const numbers = new IncreMath();

export default function Action({
    game,
    label,
    timeSpent,
    energySpent,
    onClick,
    unlocked,
    addHeader,
    encounterChance,
    location,
    setScene
  }) {
  const handleClick = () => {
    if(numbers.getRandomChance(encounterChance) == true) {
      game.doEncounter(location);
      setScene({name: 'encounter', prevScene: location});
    }
    game.addTime(timeSpent);
    game.gameData.player.subtractEnergy(energySpent);
    onClick();
  }

  return (
    <>
    {unlocked && <TextStyles.LinkText onClick={()=>{handleClick();}}>{label}</TextStyles.LinkText>}
    </>
  )
}
