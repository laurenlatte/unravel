import * as TextStyles from './TextStyles.js';
import Select from 'react-select';
import Action from './Action.js';
import {useState} from 'react';

export default function IntercourseAction({actionData, game, setIsIntro, setActionLabels, playerCame, setPlayerCame}) {
  const [targets, setTargets] = useState(actionData.targets);
  const [actions, setActions] = useState(actionData.actions);

  const [positionText, setPositionText] = useState(actionData.bodyPart.getPositionText());

  const targetList = []
  for(var targetItem in targets) {
    targetList.push({
      value: targets[targetItem], label: targets[targetItem].name, key: targetItem,
    })
  }
  const [target, setTarget] = useState(targetList[0]);

  const doArousal = (arousalGain) => {
    game.arousePlayer(arousalGain);
    game.arouseMonster(0, arousalGain);
  }

  const doMonsterActions = () => {
    for(var monsterId in game.gameData.encounters.activeEncounters.monsters) {
      const monster = game.gameData.encounters.activeEncounters.monsters[monsterId]
      monster.doMonsterAction(game.gameData.player, setActionLabels);
    }
  }

  return (
    <div>
    <div style={{display: 'inline-block', textAlign: 'left', width: '75%'}}>
    <TextStyles.DescriptorText>{actionData.name}</TextStyles.DescriptorText>
    <div style={{display: 'flex', width:'100%', textAlign: 'center'}}>
    <TextStyles.DefaultText>Target</TextStyles.DefaultText>
    <select onChange={(e)=>{setTarget(targetList[e.target.value])}} style={{width: '100px', height: '20px', color: 'black', fontSize: '12px', marginLeft: '20px', marginTop: '12px'}}>
      {targetList.map((targetItem, index)=>{
        return <option value={index}>{targetItem.label}</option>
      })}
    </select>
    </div>
    <div style={{display: 'flex', width: '100%', textAlign: 'center', alignItems: 'center'}}>
      {actions.map((data)=>{
        var isAvailable = false;
        var arousalGain = 0;
        for(var targetType in data.targetTypes) {
          if(target.value instanceof data.targetTypes[targetType].type) {
            isAvailable = true;
            if(arousalGain != data.targetTypes[targetType].arousalGain) {
              arousalGain = data.targetTypes[targetType].arousalGain
            }
          }
        }
        return isAvailable == true ? (
          <div style={{marginRight: '10px'}}>
          <TextStyles.LinkText onClick={()=>{
            setIsIntro(false);
            data.function(target);
            if(playerCame) {
              game.gameData.player.setArousal(0);
              setPlayerCame(false);
            }
            game.gameData.encounters.activeEncounters.monsters[target.value.parentId].bodyParts[target.key].setIsOccupied(true);
            doArousal(arousalGain);
            doMonsterActions();
            setPositionText(actionData.bodyPart.getPositionText());
          }}>{data.name}</TextStyles.LinkText>
          </div>
        ) :
        null
      })}
    </div>
    </div>
    <TextStyles.DefaultText>{positionText}</TextStyles.DefaultText>
    </div>
  )
}
