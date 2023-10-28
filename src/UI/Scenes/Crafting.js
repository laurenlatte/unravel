import {useState, useEffect} from 'react';
import CraftingTableInventoryItem from '../Components/CraftingTableInventoryItem.js';
import CraftableItem from '../Components/CraftableItem.js';
import * as TextStyles from '../Components/TextStyles.js';

export default function Crafting({game, setScene, prevScene}) {
  const [items, setItems] = useState(game.gameData.player.inventory.contents);
  const [craftables, setCraftables] = useState(game.getCraftables());
  useEffect(()=>{
    const updateInterval = setInterval(()=>{
      setItems(game.gameData.player.inventory.contents);
      setCraftables(game.getCraftables());
    }, 100)
    return ()=>{clearInterval(updateInterval);}
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
    <div style={{width: '100%', height: '200px'}}>
    <TextStyles.DefaultText>Inventory</TextStyles.DefaultText>
    {items.map((item)=>{
      console.log("Mapping new item")
      console.log(item)
      return <CraftingTableInventoryItem item={item} game={game} />
    })}
    <hr />
    </div>
    {craftables.map((item)=>{
      return <CraftableItem itemClass={item} game={game} setItems={setItems} />
    })}
    <button onClick={()=>{setScene({name: 'home', prevScene: 'crafting'})}}>Go Home</button>
    </div>
  )
}
