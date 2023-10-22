import Button from './Button.js';

export default function Actions({buttonDefinitions}) {
  return (
    <>
    {buttonDefinitions.map(
      (buttonDef) => {
        return <Button onClick={buttonDef.onClick}>{buttonDef.label}</Button>
      }
    )}
    </>
  )
}
