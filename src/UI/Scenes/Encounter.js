import {useEffect, useState} from 'react';
import Scene from '../Components/Scene.js';

export default function Encounter({game, setScene}) {
  const monsters = game.gameData.encounters.activeEncounters.monsters
  const defaultHeaders = []
  for(var id in monsters) {
    var monster = monsters[id];
    console.log(monster);
    defaultHeaders.push({
        show: true,
        content: "A " + monster.name + " has noticed you and is heading in your direction!",
        style: 'error',
    })
  }
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
      onClick: ()=>{
        game.removeMonsters();
        setScene('home');
      },
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
  const descriptor = monsters.length > 1 ?
  "There are multiple creatures bearing down on you!" :
  "There is a creature bearing down on you!"
  return (
    <>
    <Scene
      descriptor={descriptor}
      game={game}
      addHeader={addHeader}
      headers={headers}
      actions={actions}
    />
    </>
  )
}
