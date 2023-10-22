import {useState} from 'react';

const defaultButtonStyle = {
  width: '100px',
  height: '30px',
  borderRadius: '50px',
  backgroundColor: '#52514f',
  border: 'solid',
  borderColor: 'white',
  color: 'white',
}

const defaultHoverStyle = {
  width: '100px',
  height: '30px',
  borderRadius: '50px',
  backgroundColor: 'white',
  border: 'solid',
  borderColor: 'black',
  color: 'black',
}

export default function Button({style, hoverStyle, onClick, children}) {

  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = style!=null ? style : defaultButtonStyle;
  const buttonHoverStyle = hoverStyle!=null ? hoverStyle : defaultHoverStyle;

  return (
    <button
      onClick={()=>{onClick();}}
      onMouseEnter={()=>{setIsHovered(true);}}
      onMouseLeave={()=>{setIsHovered(false);}}
      style={isHovered ? buttonHoverStyle : buttonStyle}
    >
    {children}
    </button>
  )
}
