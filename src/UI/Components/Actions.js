import Action from './Action.js';

export default function Actions({buttonDefinitions, game, addHeader}) {
  return (
    <div style={{width: '100%', textAlign: 'left', marginLeft: '20%', marginTop: '5%', userSelect: 'none'}}>
    {buttonDefinitions.map(
      (buttonDef) => {
          return <><Action
                    game={game}
                    label={buttonDef.label}
                    timeSpent={buttonDef.timeSpent}
                    energySpent={buttonDef.energySpent}
                    onClick={buttonDef.onClick}
                    unlocked={buttonDef.unlocked}
                    addHeader={addHeader}
                  />
                  <br />
                  </>
        }
    )}
    </div>
  )
}
