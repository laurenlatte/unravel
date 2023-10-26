import Scene from '../../Components/Scene.js';
import {useState, useEffect} from 'react';
import IncreMath from '../../../Utils/IncreMath.js';
const numbers = new IncreMath();

export default function ForestInterior({game, setScene}) {

  const [forestLevel, setForestLevel] = useState(0);
  const [showExit, setShowExit] = useState(false);
  const [showEnter, setShowEnter] = useState(false);

  const enterForest = () => {
    setForestLevel(forestLevel + 1);
    if(forestLevel >= 5 && game.gameData.progression.stoneMine == false) {
      game.discoverStoneMine();
      addHeader({
        style: 'default',
        show: true,
        content: "You have discovered an abandoned stone quarry deep in the woods. You don't have tools with which to mine yet, but scattered stones in the area could be helpful. You make a rudimentary path home for easy access in the future."
      })
      setForestLevel(0);
    }
  }

  const exitForest = () => {
    setForestLevel(forestLevel - 1);
  }

  const defaultHeaders = [

  ]
  const defaultActions = [
    {
      label: 'Enter Deeper Quickly (Higher chance of harassment)',
      onClick: ()=>{
        addExploreHeader({
          style: 'default',
          show: true,
          content: 'You enter quickly into the forest, hoping that nothing spots you.'
        })
        enterForest();
      },
      timeSpent:15,
      energySpent:15,
      unlocked: true,
      encounterChance: 0.2,
      location: 'forestInterior',
    },
    {
      label: 'Enter Deeper Slowly (Lower chance of harassment)',
      onClick: ()=>{
        addExploreHeader({
          style: 'default',
          show: true,
          content: 'You explore the forest slowly and methodically, making sure to cover your tracks and stay in the shadows.'
        })
        enterForest();
      },
      timeSpent:60,
      energySpent:30,
      unlocked: true,
      encounterChance: 0.05,
      location: 'forestInterior',
    },
    {
      label: 'Exit Forest Quickly (Lower chance of harassment)',
      onClick: ()=>{
        addExploreHeader({
          style: 'default',
          show: true,
          content: 'You dash quickly through the trees, hoping that nothing spots you.'
        })
        exitForest();
      },
      timeSpent:15,
      energySpent:15,
      unlocked: showExit,
      encounterChance: 0.2,
      location: 'forestInterior',
    },
    {
      label: 'Exit Forest Slowly (Lower chance of harassment)',
      onClick: ()=>{
        addExploreHeader({
          style: 'default',
          show: true,
          content: 'You explore the forest slowly and methodically, making sure to cover your tracks and stay in the shadows.'
        })
        exitForest();
      },
      timeSpent:60,
      energySpent:30,
      unlocked: showExit,
      encounterChance: 0.05,
      location: 'forestInterior',
    },
    {
      label: 'Return to forest outskirts',
      onClick: ()=>{
        setScene({name:'forest', prevScene: 'forestInterior'});
      },
      timeSpent:60,
      energySpent:30,
      unlocked: !showExit,
      encounterChance: 0.1,
      location: 'forestInterior',
    },
  ]

  const [headers, setHeaders] = useState(defaultHeaders);
  const [actions, setActions] = useState(defaultActions);

  const addHeader = (newHeader) => {
    setHeaders([...headers, newHeader]);
  }

  const addExploreHeader = (newHeader) => {
    setHeaders([newHeader]);
  }

  useEffect(()=>{
    const updateInterval = setInterval(()=>{
      setShowExit(forestLevel > 0);
      setShowEnter(forestLevel < 10);
      setActions(defaultActions);
    }, 100)

    return () => {clearInterval(updateInterval)}
  })


  return (
    <>
    <Scene
      descriptor={"You are deep in the dense forests near your home. Animals scurry about and the sound of birdsong fills the air."}
      game={game}
      addHeader={addHeader}
      headers={headers}
      actions={actions}
      setScene={setScene}
    />
    </>
  )
}
