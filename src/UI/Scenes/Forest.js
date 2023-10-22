import Scene from '../Components/Scene.js';
import Menu from '../Components/Menu.js'

export default function Forest({game, setScene}) {
  const defaultHeaders = [
    {style: 'default', content: 'You are in the dense forests near your home. Animals scurry about and the sound of birdsong fills the air.'}
  ]
  const defaultActions = [
    {label: 'Go Home', onClick: ()=>{setScene('home')}},
    {label: 'Chop Wood', onClick: ()=>{
      game.addResource('wood', 1)
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
