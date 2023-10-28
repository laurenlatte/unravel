import {useState, useEffect} from 'react';
import InventoryItem from '../Components/InventoryItem';
import {Item} from '../../Engine/Items/Item.js';
import * as TextStyles from '../Components/TextStyles.js';
export default function InventoryMenu({game, setInvOpen}) {
  const [items, setItems] = useState(game.gameData.player.inventory.contents);
  const [emptyBoxes, setEmptyBoxes] = useState(game.gameData.player.inventory.maxSize);

  useEffect(()=>{
    const updateInterval = setInterval(()=>{
      setItems(game.gameData.player.inventory.contents);
      setEmptyBoxes(game.gameData.player.inventory.maxSize - game.gameData.player.inventory.contents.length)
    }, 100)
    return ()=>{clearInterval(updateInterval);}
  })

  const emptyBoxList = []
  for(var i = 0; i < emptyBoxes; i++) {
    emptyBoxList[i] = new Item()
  }

  return (
    <div style={{zIndex: 2, width: '500px', height: '500px', backgroundColor: '#464c59'}}>
    <div style={{width: '100%', height: '20px', display: 'flex', alignItems: 'right', justifyContent: 'space-between'}}>
    <TextStyles.DefaultText>Inventory</TextStyles.DefaultText>
    <TextStyles.DefaultText>{game.gameData.player.inventory.getHeldWeight()}lbs / {game.gameData.player.inventory.maxWeight}lbs</TextStyles.DefaultText>
    <TextStyles.TextButton fontSize='20px' color='white' onClick={()=>{setInvOpen(false)}}>X</TextStyles.TextButton>
    </div>
    <hr style={{color: 'white', marginBottom: '0px'}} />
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', height: '480px', backgroundColor: '#1f2329'}}>
      {items.map((item)=>{
        console.log("Mapping new item")
        console.log(item)
        return <InventoryItem item={item} />
      })}
      {emptyBoxList.map((item)=>{
        return <InventoryItem item={item} />
      })}
    </div>
    </div>
  )
}
