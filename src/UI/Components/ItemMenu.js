import { useState } from 'react';
import * as TextStyles from './TextStyles';

export default function ItemMenu({item, game, setItemAmount}) {
  const [amountToDrop, setAmountToDrop] = useState(0);

  const handleChange = (e) => {
    setAmountToDrop(e.target.value);
  }

  const onDrop = () => {
    game.gameData.player.inventory.subtractFromItemByName(item.name, amountToDrop);
    setItemAmount(item.amount);
  }

  return (
    <div style={{width: '100px', height: '150px', backgroundColor: '#464c59', border: 'solid', borderColor: 'white'}}>
      <TextStyles.DefaultText>Drop {item.name}</TextStyles.DefaultText>
      <input value={amountToDrop} onChange={(e)=>{handleChange(e)}} style={{width: '50px', height: '20px', backgroundColor: 'white', border: 'solid', borderColor: 'black'}} />
      <button onClick={()=>{onDrop();}}>Drop</button>
    </div>
  )
}
