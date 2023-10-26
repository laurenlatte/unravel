import {useEffect, useState} from 'react';
import Scene from '../Components/Scene.js';

export default function Encounter({game, setScene, prevScene}) {
  const monsters = game.gameData.encounters.activeEncounters.monsters
  const defaultHeaders = []
  for(var id in monsters) {
    var monster = monsters[id];
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
        setScene({name: 'intercourse', prevScene: prevScene});
      },
      timeSpent: 5,
      energySpent: 0,
      unlocked: true,
      encounterChance: 0
    },
    {
      label: 'Run Home',
      onClick: ()=>{
        game.removeMonsters();
        setScene({name: 'home', prevScene: 'encounter'});
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
