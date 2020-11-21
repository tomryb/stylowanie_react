import React, { useState } from 'react';
import './scssExampleElement.scss'

function ScssExampleElement() {
  const [active, setActive] = useState('')
  const handleClick = () => setActive(!active)

  return (
    <div className={active ? 'scssExampleElementContainer' : 'scssExampleElementContainerActive'}>zadanie2
      <button className={'buttonClass'}
        onClick={handleClick}
      >zmień kolor typie</button>
    </div>
  );
}

export default ScssExampleElement;