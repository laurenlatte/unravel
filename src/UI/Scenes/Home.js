import Scene from '../Components/Scene.js';
import Menu from '../Components/Menu.js';

export default function Home({game, setScene}) {
  const defaultHeaders = [
    {style: 'default', content: 'You are in a small clearing which you call home.'}
  ]
  const defaultActions = [
    {label: 'Enter Forest', onClick: ()=>{setScene('forest')}}
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
