import { useState } from 'react';
import {Tooltip} from 'react-tooltip';
import * as TextStyles from './TextStyles';

export default function CraftingTableInventoryItem({item, game}) {
  const [itemAmount, setItemAmount] = useState(item.amount);

  return (
    <>
    <Tooltip id={item.name} />
    <div data-tooltip-id={item.name} data-tooltip-content={item.name} style={{position: 'relative', width: '50px', height: '50px', margin: '10px', backgroundColor: '#464c59', border: 'solid', borderColor: 'white', justifyContent: 'center'}}>
      {item.isStackable &&
        <p style={{marginTop: '0px', position: 'absolute', top: '0px', left: '3px',color: 'white', fontSize: '10px'}}>x{itemAmount}</p>
      }
      {item.image &&
        <img src={item.image} style={{marginTop: '5px', marginBottom: '5px', width: '40px', height: '40px'}} />
      }
    </div>
    </>
  )
}
