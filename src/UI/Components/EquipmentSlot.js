import { useState } from 'react';
import {Tooltip} from 'react-tooltip';
import * as TextStyles from './TextStyles';

export default function EquipmentSlot({slot, item, game, defaultImage}) {
  const [showItemMenu, setShowItemMenu] = useState(false);
  if(item==undefined) {
    item = {name: 'Empty'}
  }

  const getEquippableItems = () => {
    const equippableItems = []
    for(var itemKey in game.gameData.player.inventory.contents) {
      var invItem = game.gameData.player.inventory.contents[itemKey]
      if(invItem.slot == slot) {
        equippableItems.push(invItem)
      }
    }
    return equippableItems;
  }

  return (
    <>
    <Tooltip id={item.name} />
    <div onClick={()=>{console.log(getEquippableItems());}}data-tooltip-id={item.name} data-tooltip-content={item.name} style={{position: 'relative', width: '50px', height: '50px', margin: '10px', backgroundColor: '#464c59', border: 'solid', borderColor: 'white', justifyContent: 'center'}}>
      {item.image ?
        <img src={item.image} style={{marginTop: '5px', marginBottom: '5px', width: '40px', height: '40px'}} /> :
        <img src={defaultImage} style={{marginTop: '5px', marginBottom: '5px', width: '40px', height: '40px'}} />
      }
    </div>
    </>
  )
}
