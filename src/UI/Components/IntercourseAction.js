import * as TextStyles from './TextStyles.js';
import Dropdown from 'react-bootstrap/Dropdown';
import {useState} from 'react';

export default function IntercourseAction({actionData}) {
  const [targets, setTargets] = useState(actionData.targets);
  const [actions, setActions] = useState(actionData.actions);

  return (
    <div>
    <p>I exist!</p>
    <DropdownButton id="dropdown-basic-button" title="Choose Target">
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <TextStyles.LinkText>Body Part Action Choice</TextStyles.LinkText>
    </div>
  )
}
