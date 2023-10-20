
export default function BeastButton({onPress, type}) {

  const handlePress = () => {
    onPress();
  }

  return <button
    onClick={()=>{handlePress();}}
    style={
      {backgroundColor: 'black', color: 'white'}
    }
    >
      {type == 'attack' ? "attack" : "poke"}
    </button>;
}
