import IncreMath from '../../Utils/IncreMath.js';

const numbers = new IncreMath();

export default function Number({value}) {
  return (
    <>
      {numbers.format(value)}
    </>
  )
}
