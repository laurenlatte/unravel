import Scene from '../Components/Scene.js';

export default function ForestInterior({game, setScene}) {
  const defaultHeaders = [
    {style: 'default', content: 'You are in the dense forests near your home. Animals scurry about and the sound of birdsong fills the air.'}
  ]
  const defaultActions = [
    {label: 'Go Home', onClick: ()=>{setScene('home')}, show: true},
    {
      label: 'Chop Wood',
      onClick: ()=>{
        if(game.gameData.attributes.energy.greaterThanOrEqualTo(5)) {
          game.addResource('wood', 1);
          game.subtractAttribute('energy', 5);
        }
      },
      show: true
    },
  ]

  return (
    <>
    <Scene
      headers={defaultHeaders}
      actions={defaultActions}
    />
    </>
  )
}
