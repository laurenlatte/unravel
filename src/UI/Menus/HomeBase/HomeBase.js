import {useState} from 'react';
import eye_open from '../../Images/eye_open.png';
import eye_closed from '../../Images/eye_closed.png'
import grumpy_icon from '../../Images/grumpy_icon.png';
import Number from '../../Components/Number.js';
import BeastButton from './Components/BeastButton.js';
import ShopButton from './Components/ShopButton.js';
import Button from '../../Components/Button.js';
import IncreMath from '../../../Utils/IncreMath.js';
import Header from '../../Components/Header.js';
import Actions from '../../Components/Actions.js';
import './styles.css';

const numbers = new IncreMath();

export default function HomeBase({game, setMenu}) {

  const defaultHeaders = [
    {style: 'default', content: 'You are in a clearing that you call home.'},
  ]

  const defaultActions = [
    {label: 'Enter Forest', onClick: ()=>{setMenu('forest');}}
  ]

  const [hasFire, setHasFire] = useState(false);

  const handleBuildFire = () => {

  }

  return (
    <div>
      <Header headers={defaultHeaders} />
      <Actions buttonDefinitions={defaultActions} />
    </div>
  )
}
