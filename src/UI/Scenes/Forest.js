import Scene from '../Components/Scene.js';
import Menu from '../Components/Menu.js'

export default function Forest({game, setScene}) {
  const defaultHeaders = [
    {style: 'default', content: 'You are in the dense forests near your home. Animals scurry about and the sound of birdsong fills the air.'}
  ]
  const defaultActions = [
    {label: 'Go Home', onClick: ()=>{setScene('home')}},
    {label: 'Chop Wood', onClick: ()=>{
      if(game.gameData.attributes.energy.greaterThanOrEqualTo(5)) {
        game.addResource('wood', 1);
        game.subtractAttribute('energy', 5);
      }
    }}
  ]

  return (
    <>
    <Menu game={game} />
    <Scene
      headers={defaultHeaders}
      actions={defaultActions}
    />
    </>
  )
}
