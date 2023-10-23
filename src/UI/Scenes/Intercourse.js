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
  const [monsterCame, setMonsterCame] = useState(
    false
  )
  const [isIntro, setIsIntro] = useState(true);

  const defaultActions = [
    {
      label: 'Cooperate',
      onClick: ()=>{
        game.arousePlayer(10);
        game.arouseMonster(10);
        isIntro == true && setIsIntro(false);
      },
      timeSpent: 20,
      energySpent: 5,
      unlocked: !monsterCame,
      encounterChance: 0,
      location: 'forest',
    },
    {
      label: 'Fight',
      onClick: ()=>{
        isIntro == true && setIsIntro(false);
      },
      timeSpent: 20,
      energySpent: 0,
      unlocked: !monsterCame,
      encounterChance: 0,
      location: 'forest',
    },
    {
      label: 'Run',
      onClick: ()=>{
        game.removeMonsters();
        setScene('home')
      },
      timeSpent: 20,
      energySpent: 25,
      unlocked: !monsterCame
    },
    {
      label: 'Go Home',
      onClick: ()=>{
        game.removeMonsters();
        setScene('home')
      },
      timeSpent: 20,
      energySpent: 25,
      unlocked: monsterCame
    }
  ]

  useEffect(()=>{
    const updateInterval = setInterval(()=>{
      setArousal(game.gameData.attributes.arousal);
      setMonsterArousal(game.gameData.encounters.activeEncounters.monsters[0].arousal);
      if(game.gameData.encounters.activeEncounters.monsters[0].arousal.greaterThanOrEqualTo(100)) {
        setMonsterCame(true);
      }
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
        {monsterCame &&
          <TextStyles.LewdText>The wolf fills your hole with its lewd semen and scampers off into the forest.</TextStyles.LewdText>
        }
      </div>
      {isIntro &&
        <TextStyles.LewdText>A lewd warmth fills you as they approach</TextStyles.LewdText>
      }
        <Actions setScene={setScene} buttonDefinitions={defaultActions} game={game} />
    </div>
  )
}
