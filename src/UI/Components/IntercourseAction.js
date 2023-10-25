import * as TextStyles from './TextStyles.js';
import Select from 'react-select';
import {useState} from 'react';

export default function IntercourseAction({actionData}) {
  const [targets, setTargets] = useState(actionData.targets);
  const [actions, setActions] = useState(actionData.actions);

  const [target, setTarget] = useState(undefined);

  const targetList = []
  for(var targetItem in targets) {
    targetList.push({
      value: targets[targetItem], label: targets[targetItem].name
    })
  }
  console.log(targetList);

  return (
    <div>
    <div style={{display: 'inline-block', textAlign: 'left', width: '75%'}}>
    <TextStyles.DescriptorText>{actionData.name}</TextStyles.DescriptorText>
    <div style={{display: 'flex', width:'100%', textAlign: 'center'}}>
    <TextStyles.DefaultText>Target</TextStyles.DefaultText>
    <select style={{width: '100px', height: '20px', color: 'black', fontSize: '12px', marginLeft: '20px', marginTop: '12px'}} value={target}>
      {targetList.map((target)=>{
        return <option value={target}>{target.label}</option>
      })}
    </select>
    </div>
    </div>
    <TextStyles.DefaultText>Your {actionData.name} is free.</TextStyles.DefaultText>
    </div>
  )
}
