import {Tooltip} from 'react-tooltip';
import * as TextStyles from './TextStyles';

export default function InventoryItem(item) {
  console.log("Item passed as prop is ");
  console.log(item)
  return (
    <>
    <Tooltip id={item.item.name} />
    <div data-tooltip-id={item.item.name} data-tooltip-content={item.item.name} style={{position: 'relative', width: '50px', height: '50px', margin: '10px', backgroundColor: '#464c59', border: 'solid', borderColor: 'white', justifyContent: 'center'}}>
      {item.item.isStackable &&
        <p style={{marginTop: '0px', position: 'absolute', top: '0px', left: '3px',color: 'white', fontSize: '10px'}}>x{item.item.amount}</p>
      }
      {item.item.image &&
        <img src={item.item.image} style={{marginTop: '5px', marginBottom: '5px', width: '40px', height: '40px'}} />
      }
    </div>
    </>
  )
}
