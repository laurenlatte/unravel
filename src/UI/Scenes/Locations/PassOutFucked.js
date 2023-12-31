import {useEffect, useState} from 'react';
import Scene from '../../Components/Scene.js';

export default function PassOutFucked({game, setScene}) {

  const defaultActions = [
    {
      label: 'Wake up at home',
      onClick: ()=>{
        setScene({name: 'home', prevScene: 'passOutFucked'});
        game.restPlayerCharacter();
        game.removeMonsters();
      },
      timeSpent: 480,
      energySpent: 0,
      unlocked: true
    }
  ]

  const defaultHeaders = [
  ]

  const [actions, setActions] = useState(defaultActions);
  const [headers, setHeaders] = useState(defaultHeaders)

  const addHeader = (newHeader) => {
    setHeaders([...headers, newHeader]);
  }

  useEffect(()=>{
    const updateInterval = setInterval(()=>{
      setHeaders(defaultHeaders);
      setActions(defaultActions);
    }, 100)

    return () => {clearInterval(updateInterval)}
  })


  return (
    <>
    <Scene
      game={game}
      descriptor={"You run out of energy and are fucked brutally as you slip in and out of consciousness."}
      addHeader={addHeader}
      headers={headers}
      actions={actions}
    />
    </>
  )
}
