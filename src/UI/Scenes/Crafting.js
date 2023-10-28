import {useState, useEffect} from 'react';
import CraftingTableInventoryItem from '../Components/CraftingTableInventoryItem.js';

export default function Crafting({game, setScene, prevScene}) {
  const [items, setItems] = useState(game.gameData.player.inventory.contents);

  useEffect(()=>{
    const updateInterval = setInterval(()=>{
      setItems(game.gameData.player.inventory.contents);
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
    {items.map((item)=>{
      console.log("Mapping new item")
      console.log(item)
      return <CraftingTableInventoryItem item={item} game={game} />
    })}
    <button onClick={()=>{setScene({name: 'home', prevScene: 'crafting'})}}>Go Home</button>
    </div>
  )
}
