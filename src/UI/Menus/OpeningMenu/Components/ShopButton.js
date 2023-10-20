import {useState} from 'react';
import Number from '../../../Components/Number.js'

export default function ShopButton({label, statName, priceName, game}) {


  const [price, setPrice] = useState(game.gameData.costs[priceName]);

  const shopFunction = () => {
    game.purchaseUpgrade(statName, priceName)
    setPrice(game.gameData.costs[priceName]);
  }

  return (
    <button
      style={{backgroundColor: 'black', color: 'white'}}
      onClick={()=>{shopFunction();}}
    >
      {label}
      <br />
      <Number value={price} /> Gold
    </button>
  )
}
