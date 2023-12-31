
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

export function ErrorText({children}) {
  return (
    <p style={{...styleDefaults, color: 'red'}}>{children}</p>
  )
}

export function DefaultText({children}) {
  return (
    <p style={{...styleDefaults}}>{children}</p>
  )
}

export function DescriptorText({children}) {
  return (
    <p style={{...styleDefaults, fontSize: '15px'}}>{children}</p>
  )
}

export function LinkText({children, onClick, overrideFontSize}) {
  var style = {}
  if(overrideFontSize) {
    style = {...styleDefaults, color: 'blue', userSelect: 'none', fontSize: overrideFontSize}
  } else {
    style = {...styleDefaults, color: 'blue', userSelect: 'none'}
  }
  return (
    <a onClick={onClick}style={style}>{children}</a>
  )
}

export function TextButton({children, onClick, color, fontSize}) {
  return (
    <a onClick={onClick}style={{...styleDefaults, fontSize: fontSize, color: color, userSelect: 'none'}}>{children}</a>
  )
}
