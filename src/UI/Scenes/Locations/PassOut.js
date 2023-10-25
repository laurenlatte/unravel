import {useEffect, useState} from 'react';
import Scene from '../../Components/Scene.js';

export default function Home({game, setScene}) {

  const [showShelterUpgrade, setShowShelterUpgrade] = useState(game.checkCanAffordShelter() && game.gameData.home.shelters[game.gameData.home.shelterLevel.add(1)] != null)
  const [shelterHeader, setShelterHeader] = useState(game.gameData.home.shelters[game.gameData.home.shelterLevel].description);

  const defaultActions = [
    {
      label: 'Wake up at home',
      onClick: ()=>{
        setScene('home');
        game.restPlayerCharacter();
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
      descriptor={"You have run out of energy and pass out."}
      addHeader={addHeader}
      headers={headers}
      actions={actions}
    />
    </>
  )
}