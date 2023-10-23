import {useEffect, useState} from 'react';
import Scene from '../Components/Scene.js';

export default function Encounter({game, setScene}) {
  const monster = game.gameData.encounters.activeEncounters.monsters[0]
  console.log(monster);
  const defaultHeaders = [
    {
      show: true,
      content: "A " + monster.name + " has noticed you and is heading in your direction!",
      style: 'error',
    }
  ]
  const defaultActions = [
    {
      label: 'Present your ass',
      onClick: ()=>{
        game.arousePlayer(10);
        setScene('intercourse');
      },
      timeSpent: 5,
      energySpent: 0,
      unlocked: true,
      encounterChance: 0
    },
    {
      label: 'Run',
      onClick: ()=>{setScene('home')},
      timeSpent: 20,
      energySpent: 5,
      unlocked: true
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
      descriptor={"There is a creature bearing down on you!"}
      game={game}
      addHeader={addHeader}
      headers={headers}
      actions={actions}
    />
    </>
  )
}
