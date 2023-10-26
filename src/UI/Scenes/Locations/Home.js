import {useEffect, useState} from 'react';
import Scene from '../../Components/Scene.js';

export default function Home({game, setScene}) {

  const [showShelterUpgrade, setShowShelterUpgrade] = useState(game.checkCanAffordShelter() && game.gameData.home.shelters[game.gameData.home.shelterLevel.add(1)] != null)
  const [shelterHeader, setShelterHeader] = useState(game.gameData.home.shelters[game.gameData.home.shelterLevel].description);
  const [showStoneQuarry, setShowStoneQuarry] = useState(game.gameData.progression.stoneMine);

  const defaultActions = [
    {
      label: 'Enter Forest',
      onClick: ()=>{setScene({name: 'forest', prevScene: 'home'});},
      timeSpent: 20,
      energySpent: 5,
      unlocked: true,
      encounterChance: 0,
      location: 'forest',
    },
    {
      label: 'Enter Stone Quarry',
      onClick: ()=>{setScene({name: 'stoneQuarry', prevScene: 'home'});},
      timeSpent: 20,
      energySpent: 5,
      unlocked: showStoneQuarry,
      encounterChance: 0,
      location: 'forest',
    },
    {
      label: 'Sleep',
      onClick: ()=>{
        game.restPlayerCharacter()
      },
      timeSpent: 480,
      energySpent: 0,
      unlocked: true,
      encounterChance: game.gameData.home.shelters[game.gameData.home.shelterLevel].encounterChance,
      location: 'forest',
    },
    {
      label: 'Upgrade Shelter',
      onClick: ()=>{
          game.upgradeShelter();
          setHeaders(defaultHeaders);
          setActions(defaultActions);
      },
      timeSpent: 480,
      energySpent: 50,
      unlocked: showShelterUpgrade
    }
  ]

  const defaultHeaders = [
    {
      show: true,
      content: shelterHeader,
      style: 'default'
    }
  ]

  const [actions, setActions] = useState(defaultActions);
  const [headers, setHeaders] = useState(defaultHeaders)

  const addHeader = (newHeader) => {
    setHeaders([...headers, newHeader]);
  }

  useEffect(()=>{
    const updateInterval = setInterval(()=>{
      setShowShelterUpgrade(game.checkCanAffordShelter() && game.gameData.home.shelters[game.gameData.home.shelterLevel.add(1)] != null);
      setShowStoneQuarry(game.gameData.progression.stoneMine)
      setShelterHeader(game.gameData.home.shelters[game.gameData.home.shelterLevel].description)
      setHeaders(defaultHeaders);
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
      setScene={setScene}
    />
    </>
  )
}
