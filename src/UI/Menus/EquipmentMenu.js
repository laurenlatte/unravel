import EquipmentSlot from '../Components/EquipmentSlot';
import defaultHeadImage from '../Images/helmetEquipSlot.png';
import defaultLeftHandImage from '../Images/leftHandEquipSlot.png';
import defaultRightHandImage from '../Images/rightHandEquipSlot.png';
import defaultChestImage from '../Images/chestEquipSlot.png';
import defaultLegsImage from '../Images/legsEquipSlot.png';
import defaultBootsImage from '../Images/bootsEquipSlot.png';
import { useState } from 'react';

export default function EquipmentMenu({game, setEqpOpen}) {

  const [headSlot, setHeadSlot] = useState(game.gameData.player.equipment.head)
  const [chestSlot, setChestSlot] = useState(game.gameData.player.equipment.chest)
  const [leftHandSlot, setLeftHandSlot] = useState(game.gameData.player.equipment.leftHand)
  const [rightHandSlot, setRightHandSlot] = useState(game.gameData.player.equipment.rightHand)
  const [legsSlot, setLegsSlot] = useState(game.gameData.player.equipment.legs)
  const [bootsSlot, setBootsSlot] = useState(game.gameData.player.equipment.boots)

  return (
    <div style={{zIndex: 2, width: '225px', height: '300px', backgroundColor: '#464c59'}}>
      <div style={{display: 'inline-block', border: 'solid'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <EquipmentSlot slot="head" item={headSlot} setSlot={setHeadSlot} game={game} defaultImage={defaultHeadImage}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <EquipmentSlot slot="leftHand" item={leftHandSlot} setSlot={setLeftHandSlot} game={game} defaultImage={defaultLeftHandImage}/>
          <EquipmentSlot slot="chest" item={chestSlot} setSlot={setChestSlot} game={game} defaultImage={defaultChestImage}/>
          <EquipmentSlot slot="rightHand" item={rightHandSlot} setSlot={setRightHandSlot} game={game} defaultImage={defaultRightHandImage}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <EquipmentSlot slot="legs" item={legsSlot} game={game} setSlot={setLegsSlot} defaultImage={defaultLegsImage}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <EquipmentSlot slot="boots" item={bootsSlot} game={game} setSlot={setBootsSlot} defaultImage={defaultBootsImage}/>
        </div>
      </div>
    </div>
  )
}
