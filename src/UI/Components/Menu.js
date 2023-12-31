import {useState, useEffect} from 'react';
import {DefaultText} from './TextStyles.js';
import Number from './Number.js'

function StatDisplay({game, setScene, scene}) {
  const [arousal, setArousal] = useState(game.gameData.player.getArousal());
  const [energy, setEnergy] = useState(game.gameData.player.getEnergy());
  const [minute, setMinute] = useState(game.gameData.time.minute);
  const [hour, setHour] = useState(game.gameData.time.hour);
  const [day, setDay] = useState(game.gameData.time.day);
  useEffect(()=>{
    const updateCheck = setInterval(()=>{
      setArousal(game.gameData.player.getArousal());
      setEnergy(game.gameData.player.getEnergy());
      setMinute(game.gameData.time.minute)
      setHour(game.gameData.time.hour)
      setDay(game.gameData.time.day)
      if(game.gameData.player.getEnergy() <= 0 && scene.name != 'encounter' && scene.name != 'intercourse' && scene.name != 'passOutFucked'){
        console.log("scene is ")
        setScene({name: 'passOut', prevScene: scene});
      } else if(game.gameData.player.getEnergy() <= 0) {
        game.removeMonsters();
        setScene({name: 'passOutFucked', prevScene: scene});
      }
    }, 100)
    return () => {
      clearInterval(updateCheck)
    }
  })

  return (
    <>
      <div style={{display: 'inline-block'}}>
        <DefaultText>Day: {day}</DefaultText>
        <DefaultText>Time: {hour}:{minute == 0 ? "00" : minute}</DefaultText>
      </div>
      <hr style={{color:'white'}} />
      <DefaultText> Attributes </DefaultText>
      <hr style={{color: 'white'}} />
      <DefaultText>Arousal: <Number value={arousal} /></DefaultText>
      <DefaultText>Energy: <Number value={energy} /></DefaultText>
    </>
  )
}

export default function Menu({game, setScene, scene, setInvOpen, invOpen, setEqpOpen, eqpOpen}) {
  return (
    <div style={{
      height: '100%',
      width: '25%',
      position: 'fixed',
      zIndex: '1',
      top: '0',
      left: '0',
      backgroundColor: '#282c34',
      overflowX: 'hidden',
      paddingTop: '20px',
    }}>
      <hr style={{color:'white'}} />
      <StatDisplay game={game} scene={scene} setScene={setScene} />
      <button onClick={()=>{setInvOpen(!invOpen)}}>Open Inventory</button>
      <button onClick={()=>{setEqpOpen(!eqpOpen)}}>Open Equipment</button>
    </div>
  )
}
