import {useState, useEffect} from 'react';
import * as TextStyles from '../Components/TextStyles.js'
import Number from '../Components/Number.js';
import Actions from '../Components/Actions.js';
export default function Intercourse({game, setScene}) {

  const [arousal, setArousal] = useState(
    game.gameData.attributes.arousal
  );
  const [monsterArousal, setMonsterArousal] = useState(
    game.gameData.encounters.activeEncounters.monsters[0].arousal
  );

  const defaultActions = [
    {
      label: 'Cooperate',
      onClick: ()=>{
        game.arousePlayer(10);
        game.arouseMonster(10);
      },
      timeSpent: 20,
      energySpent: 5,
      unlocked: true,
      encounterChance: 0,
      location: 'forest',
    },
    {
      label: 'Fight',
      onClick: ()=>{

      },
      timeSpent: 480,
      energySpent: 0,
      unlocked: true,
      encounterChance: 0,
      location: 'forest',
    },
    {
      label: 'Run',
      onClick: ()=>{
        setScene('home')
      },
      timeSpent: 20,
      energySpent: 25,
      unlocked: true
    }
  ]

  useEffect(()=>{
    const updateInterval = setInterval(()=>{
      setArousal(game.gameData.attributes.arousal);
      setMonsterArousal(game.gameData.encounters.activeEncounters.monsters[0].arousal);
    }, 100);
    return ()=>{clearInterval(updateInterval)}
  })

  return (
    <div style={{
      height: '100%',
      width: '75%',
      position: 'fixed',
      zIndex: '1',
      top: '0',
      right: '0',
      backgroundColor: 'black',
      overflowX: 'hidden',
      paddingTop: '20px',
    }}>
      <div style={{display: 'inline-block'}}>
        {monsterArousal <= 50 ?
          <TextStyles.DefaultText>Monster Arousal: <Number value={monsterArousal} /></TextStyles.DefaultText> :
          <TextStyles.LewdText>Monster Arousal: <Number value={monsterArousal} /></TextStyles.LewdText>
        }
      </div>
        <TextStyles.LewdText>A lewd warmth fills you as they approach</TextStyles.LewdText>
        <Actions setScene={setScene} buttonDefinitions={defaultActions} game={game} />
    </div>
  )
}
