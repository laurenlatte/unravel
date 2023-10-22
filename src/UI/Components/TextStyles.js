
const styleDefaults = {
  fontSize: '13px',
  colour: 'white',
}

export function LewdText({children}) {
  return (
    <p style={{...styleDefaults, color: '#be4ae8'}}>{children}</p>
  )
}

export function WarmthText({children}) {
  return (
    <p style={{...styleDefaults, color: 'orange'}}>{children}</p>
  )
}

export function DefaultText({children}) {
  return (
    <p style={{...styleDefaults}}>{children}</p>
  )
}
