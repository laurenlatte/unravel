import Button from './Button.js'

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
    {unlocked && <Button onClick={()=>{handleClick();}}>{label}</Button>}
    </>
  )
}
