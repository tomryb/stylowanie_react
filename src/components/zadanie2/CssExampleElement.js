import React, { useState } from 'react';
import './cssExampleElement.css'

function CssExampleElement() {
  const [active, setActive] = useState('')
  const handleClick = () => setActive(!active)


  const [hover, setHover] = useState(false)
  const handleHoverOn = () => setHover(true)
  const handleHoverOff = () => setHover(false)

  const buttonBackgroundColor = {
    backgroundColor: hover ? 'green' : active ? active : 'white',
  }

  return (
    <div className={active ? 'cssExampleElementContainer' : 'cssExampleElementContainerActive'}
    >zadanie2
      <button style={buttonBackgroundColor}
        onClick={handleClick}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
      >zmień kolor typie</button>
    </div>
  );
}

export default CssExampleElement;