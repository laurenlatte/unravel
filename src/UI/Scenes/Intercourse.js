import {useState, useEffect} from 'react';
import * as TextStyles from '../Components/TextStyles.js'
import Number from '../Components/Number.js';
import Actions from '../Components/Actions.js';
import Header from '../Components/Header.js';
import IntercourseAction from '../Components/IntercourseAction.js';

export default function Intercourse({game, setScene, prevScene}) {

  const [arousal, setArousal] = useState(
    game.gameData.player.getArousal()
  );

  const [actionLabels, setActionLabels] = useState([]);

  const [monsterArousal, setMonsterArousal] = useState(
    game.gameData.encounters.activeEncounters.monsters[0].getArousal()
  );
  const [monsterCame, setMonsterCame] = useState(
    false
  )
  const [playerCame, setPlayerCame] = useState(false);
  const [isIntro, setIsIntro] = useState(true);

  var actionData = [];
  const player = game.gameData.player;
  const monsters = game.gameData.encounters.activeEncounters.monsters;
  for(var bodyPartId in player.getBodyParts()) {
    var bodyPart = player.getBodyParts()[bodyPartId]
    actionData.push(
      {
        actions: bodyPart.actions,
        targets: monsters[0].bodyParts,
        name: bodyPart.name,
        bodyPart: bodyPart,
      }
    )
  }
  console.log(actionData);

  const defaultActions = [
    {
      label: 'Return',
      onClick: ()=>{
        game.removeMonsters();
        console.log(prevScene);
        setScene({name: prevScene, prevScene: 'intercourse'});
      },
      timeSpent: 20,
      energySpent: 25,
      unlocked: monsterCame
    }
  ]

  useEffect(()=>{
    const updateInterval = setInterval(()=>{
      try {
        setArousal(game.gameData.player.getArousal());
        setMonsterArousal(game.gameData.encounters.activeEncounters.monsters[0].getArousal());
        if(game.gameData.encounters.activeEncounters.monsters[0].getArousal() >= 100) {
          setMonsterCame(true);
        }
        if(game.gameData.player.getArousal() >= 100) {
          setPlayerCame(true);
        }
        if(monsterCame && playerCame) {
          game.gameData.player.setArousal(0);
        }
      } catch {
        console.log("Ran into error updating intercourse scene")
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
      overflowX: 'scroll',
      paddingTop: '20px',
    }}>
      <div style={{display: 'inline-block'}}>
        {monsterArousal <= 50 ?
          <TextStyles.DefaultText>Monster Arousal: <Number value={monsterArousal} /></TextStyles.DefaultText> :
          <TextStyles.LewdText>Monster Arousal: <Number value={monsterArousal} /></TextStyles.LewdText>
        }
        {monsterCame &&
          <TextStyles.LewdText>The {game.gameData.encounters.activeEncounters.monsters[0].name} covers you in its warm semen and scampers off into the forest.</TextStyles.LewdText>
        }
        {playerCame &&
          <TextStyles.LewdText>Fluid gushes out of your dripping pussy as your body convulses in rapture. You orgasm.</TextStyles.LewdText>
        }
        {!monsterCame && actionLabels.map((label)=>{
          return <TextStyles.LewdText>{label}</TextStyles.LewdText>
        })}
      </div>
      {isIntro &&
        <TextStyles.LewdText>A lewd warmth fills you as they approach</TextStyles.LewdText>
      }
        {monsterCame == false && actionData.map((data) => {
          return <IntercourseAction actionData={data} game={game} playerCame={playerCame} setPlayerCame={setPlayerCame} setIsIntro={setIsIntro} setActionLabels={setActionLabels} />
        })}
        {monsterCame &&
          <Actions setScene={setScene} buttonDefinitions={defaultActions} game={game} />
        }
    </div>
  )
}
