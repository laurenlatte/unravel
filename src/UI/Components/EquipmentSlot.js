import { useState } from 'react';
import {Tooltip} from 'react-tooltip';
import * as TextStyles from './TextStyles';

function EquipContextMenu({game, slot, setSlot}) {
  const getEquippableItems = () => {
    const equippableItems = [{item: {name: 'Empty'}}]
    for(var itemKey in game.gameData.player.inventory.contents) {
      var invItem = game.gameData.player.inventory.contents[itemKey]
      if(invItem.slot == slot) {
        equippableItems.push({item: invItem})
      }
    }
    return equippableItems;
  }

  const equipItem = (item) => {
    item.equipped = true;
    game.gameData.player.equipment[slot] = item;
  }

  const unEquipItem = () => {
    if(game.gameData.player.equipment[slot] != undefined) {
      game.gameData.player.equipment[slot].equipped = false;
      game.gameData.player.equipment[slot] = {name: 'Empty'};
    }
  }


  const equippableItems = getEquippableItems();

  const [itemToEquip, setItemToEquip] = useState(equippableItems[0]);

  return (
    <div style={{width: '200px', height: '80px', backgroundColor: 'white', position: 'absolute', zIndex: 3, top: '50%  ', left: '50%', right: '50%'}}>
      <button onClick={()=>{unEquipItem(); equipItem(itemToEquip.item); setSlot(itemToEquip.item)}} style={{color: 'black'}}>Equip</button>
      <select onChange={(e)=>{setItemToEquip(equippableItems[e.target.value])}} style={{width: '100px', height: '20px', color: 'black', fontSize: '12px', marginLeft: '20px', marginTop: '12px'}}>
        {equippableItems.map((equippableItem, index)=>{
          return <option value={index}>{equippableItem.item.name}</option>
        })}
      </select>
      {itemToEquip.item.image && <img src={itemToEquip.item.image} />}}
    </div>
  )
}

export default function EquipmentSlot({slot, item, game, defaultImage, setSlot}) {
  const [showItemMenu, setShowItemMenu] = useState(false);
  if(item==undefined) {
    item = {name: 'Empty'}
  }
  return (
    <>
    <Tooltip id={item.name} />
    <div onClick={()=>{setShowItemMenu(!showItemMenu)}}data-tooltip-id={item.name} data-tooltip-content={item.name} style={{position: 'relative', width: '50px', height: '50px', margin: '10px', backgroundColor: '#464c59', border: 'solid', borderColor: 'white', justifyContent: 'center'}}>
      {item.image ?
        <img src={item.image} style={{marginTop: '5px', marginBottom: '5px', width: '40px', height: '40px'}} /> :
        <img src={defaultImage} style={{marginTop: '5px', marginBottom: '5px', width: '40px', height: '40px'}} />
      }
    </div>
    {showItemMenu && <EquipContextMenu game={game} slot={slot} setSlot={setSlot} />}
    </>
  )
}
