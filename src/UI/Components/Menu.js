import {useState, useEffect} from 'react';
import {DefaultText} from './TextStyles.js';
import Number from './Number.js'

function StatDisplay({game}) {
  const [wood, setWood] = useState(game.gameData.resources.wood);
  const [stone, setStone] = useState(game.gameData.resources.stone);
  const [copper, setCopper] = useState(game.gameData.resources.copper);
  const [arousal, setArousal] = useState(game.gameData.attributes.arousal);
  const [energy, setEnergy] = useState(game.gameData.attributes.energy);

  useEffect(()=>{
    const updateCheck = setInterval(()=>{
      setWood(game.gameData.resources.wood);
      setStone(game.gameData.resources.stone);
      setCopper(game.gameData.resources.copper);
      setArousal(game.gameData.attributes.arousal);
      setEnergy(game.gameData.attributes.energy);
      console.log('updating resources');
    }, 100)
    return () => {
      clearInterval(updateCheck)
    }
  })

  return (
    <>
      <DefaultText>Resources</DefaultText>
      <hr style={{color:'white'}} />
      <DefaultText>Wood: <Number value={wood} /></DefaultText>
      <DefaultText>Stone: <Number value={stone} /></DefaultText>
      <DefaultText>Copper: <Number value={copper} /></DefaultText>
      <hr style={{color:'white'}} />
      <DefaultText> Attributes </DefaultText>
      <hr style={{color: 'white'}} />
      <DefaultText>Arousal: <Number value={arousal} /></DefaultText>
      <DefaultText>Energy: <Number value={energy} /></DefaultText>
    </>
  )
}

export default function Menu({game}) {
  return (
    <div style={{
      height: '100%',
      width: '25%',
      position: 'fixed',
      zIndex: '1',
      top: '0',
      left: '0',
      backgroundColor: '#282c34',
      overflowX: 'hidden',
      paddingTop: '20px',
    }}>
      <hr style={{color:'white'}} />
      <StatDisplay game={game} />
    </div>
  )
}
