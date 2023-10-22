import {useState, useEffect} from 'react';
import {DefaultText} from './TextStyles.js';
import Number from './Number.js'

function ResourceDisplay({game}) {
  const [resources, setResources] = useState(game.gameData.resources)
  const [wood, setWood] = useState(game.gameData.resources.wood);
  const [stone, setStone] = useState(game.gameData.resources.stone);
  const [copper, setCopper] = useState(game.gameData.resources.copper);

  useEffect(()=>{
    const updateCheck = setInterval(()=>{
      setWood(game.gameData.resources.wood);
      setStone(game.gameData.resources.stone);
      setCopper(game.gameData.resources.copper);
      console.log('updating resources');
    }, 100)
    return () => {
      clearInterval(updateCheck)
    }
  })

  return (
    <>
      <DefaultText>Wood: <Number value={resources.wood} /></DefaultText>
      <DefaultText>Stone: <Number value={resources.stone} /></DefaultText>
      <DefaultText>Copper: <Number value={resources.copper} /></DefaultText>
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
      <p style={{fontSize: '12px'}}>Resources</p>
      <hr style={{color:'white'}} />
      <ResourceDisplay game={game} />
    </div>
  )
}
