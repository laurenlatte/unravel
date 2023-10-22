import {useEffect, useState} from 'react';
import Scene from '../Components/Scene.js';

export default function Home({game, setScene}) {

  const [showHouse, setShowHouse] = useState(game.gameData.progression.houseBuilt == false)

  const defaultActions = [
    {
      label: 'Enter Forest',
      onClick: ()=>{setScene('forest')},
      timeSpent: 20,
      energySpent: 5,
      unlocked: true
    },
    {
      label: 'Sleep',
      onClick: ()=>{
        game.setAttribute('energy', 100)
      },
      timeSpent: 480,
      energySpent: 0,
      unlocked: true
    }
  ]

  const defaultHeaders = [
    {
      style: 'default',
      content: 'You are in a small clearing which you call home.',
      show: true
    }
  ]

  const [actions, setActions] = useState(defaultActions);
  const [headers, setHeaders] = useState(defaultHeaders)

  const addHeader = (newHeader, clearPrevious) => {
    if(clearPrevious) {
      setHeaders(defaultHeaders);
    }
    setHeaders([...headers, newHeader]);
  }

  useEffect(()=>{
    const updateInterval = setInterval(()=>{
      setShowHouse(
        game.gameData.progression.houseBuilt == false &&
        game.gameData.resources.wood.greaterThanOrEqualTo(10)
      );
      setActions(defaultActions);
    }, 100)

    return () => {clearInterval(updateInterval)}
  })


  return (
    <>
    <Scene
      game={game}
      descriptor={"You are in a small clearing which you call home."}
      addHeader={addHeader}
      headers={headers}
      actions={actions}
    />
    </>
  )
}
