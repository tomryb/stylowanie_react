import React, { useState } from 'react';

function InlineBackgroundColor() {
  const [color, setColor] = useState('')
  const handleChange = (e) => setColor(e.target.value)

  const [hover, setHover] = useState(false)
  const handleHoverOn = () => setHover(true)
  const handleHoverOff = () => setHover(false)

  //jak chcemy hover dodajemy consta do style w div
  const inlineBackgroundStyle = {
    backgroundColor: hover ? 'green' : color ? color : 'white',
  }

  return (
    <div style={{ backgroundColor: color }} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>zadanie1
      <input type="text" onChange={handleChange}>

      </input>

    </div>
  );
}

export default InlineBackgroundColor;