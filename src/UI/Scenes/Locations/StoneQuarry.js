import {useEffect, useState} from 'react';
import Scene from '../../Components/Scene.js';

export default function StoneQuarry({game, setScene}) {
  const defaultHeaders = [
  ]
  const defaultActions = [
    {
      label: 'Go Home',
      onClick: ()=>{setScene({name: 'home', prevScene: 'stoneQuarry'})},
      timeSpent: 20,
      energySpent: 5,
      unlocked: true
    },
    {
      label: 'Gather Loose Rocks',
      onClick: ()=>{
        game.addResource('stone', 1);
        addHeader({
          style: 'default',
          show: true,
          content: 'You labor in the quarry to carry home one stone chunk.'
        })
      },
      timeSpent:60,
      energySpent:15,
      unlocked: true,
      encounterChance: 0.1,
      location: 'stoneQuarry',
    },
  ]

  const [headers, setHeaders] = useState(defaultHeaders);
  const [actions, setActions] = useState(defaultActions);
  const addHeader = (newHeader) => {
    setHeaders([...headers, newHeader]);
  }
  return (
    <>
    <Scene
      descriptor={"You are in a dry outcrop of stone etched ruggedly into the landscape, in stark contrast to the surrounding forests."}
      game={game}
      addHeader={addHeader}
      headers={headers}
      actions={actions}
      setScene={setScene}
    />
    </>
  )
}
