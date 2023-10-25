import * as TextStyles from './TextStyles.js';
import Select from 'react-select';
import Action from './Action.js';
import {useState} from 'react';

export default function IntercourseAction({actionData}) {
  const [targets, setTargets] = useState(actionData.targets);
  const [actions, setActions] = useState(actionData.actions);

  console.log(actions);

  const [positionText, setPositionText] = useState(actionData.bodyPart.getPositionText());

  const targetList = []
  for(var targetItem in targets) {
    targetList.push({
      value: targets[targetItem], label: targets[targetItem].name
    })
  }
  const [target, setTarget] = useState(targetList[0]);
  console.log(targetList);
  console.log(target);

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
        for(var targetType in data.targetTypes) {
          if(target.value instanceof data.targetTypes[targetType]) {
            isAvailable = true;
          }
        }
        return isAvailable == true ?
        <TextStyles.LinkText onClick={()=>{data.function(target); setPositionText(actionData.bodyPart.getPositionText())}}>{data.name}</TextStyles.LinkText> :
        null
      })}
    </div>
    </div>
    <TextStyles.DefaultText>{positionText}</TextStyles.DefaultText>
    </div>
  )
}
