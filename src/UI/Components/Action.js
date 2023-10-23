import Button from './Button.js'
import * as TextStyles from './TextStyles.js';

export default function Action({game, label, timeSpent, energySpent, onClick, unlocked, addHeader}) {
  const handleClick = () => {
    if(game.hasEnergy(energySpent)) {
      game.addTime(timeSpent);
      game.subtractAttribute('energy', energySpent);
      onClick();
    } else {
      addHeader({style: 'error', content: "You don't have enough energy for that.", show:true})
    }
  }

  return (
    <>
    {unlocked && <TextStyles.LinkText onClick={()=>{handleClick();}}>{label}</TextStyles.LinkText>}
    </>
  )
}
