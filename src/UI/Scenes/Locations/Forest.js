import {useEffect, useState} from 'react';
import Scene from '../../Components/Scene.js';
import {Wood} from '../../../Engine/Items/Item';

export default function Forest({game, setScene}) {
  const defaultHeaders = [
  ]
  const defaultActions = [
    {
      label: 'Go Home',
      onClick: ()=>{setScene({name: 'home', prevScene: 'forest'})},
      timeSpent: 20,
      energySpent: 5,
      unlocked: true
    },
    {
      label: 'Gather Wood',
      onClick: ()=>{
        game.gameData.player.inventory.addItem(new Wood(1));
        addHeader({
          style: 'default',
          show: true,
          content: 'You labor in the forest to find one log of wood.'
        })
      },
      timeSpent:60,
      energySpent:15,
      unlocked: true,
      encounterChance: 0.1,
      location: 'forest',
    },
    {
      label: 'Explore Deeper',
      onClick: ()=>{
        setScene({name: 'forestInterior', prevScene: 'forest'});
      },
      timeSpent:30,
      energySpent:15,
      unlocked: true,
      encounterChance: 0,
      location: 'forest',
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
      descriptor={"You are in the dense forests near your home. Animals scurry about and the sound of birdsong fills the air."}
      game={game}
      addHeader={addHeader}
      headers={headers}
      actions={actions}
      setScene={setScene}
    />
    </>
  )
}
