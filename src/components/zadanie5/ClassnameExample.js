import React, { useState } from 'react';
import styles from './scssClassnameExample.module.scss'
import classNames from 'classnames';

function ClassnameExample() {
  const [ active, setActive ] = useState(false);
  const [ color, setColor ] = useState('');

  const handleClick = () => setActive(!active);
  const handleChange = (e) => setColor(e.target.value);

  const scssExampleElementContainerStyle = {
    backgroundColor: color,
  }

  const containerClassName = classNames(
    styles.scssExampleElementContainer,
    {
      [styles.scssExampleElementContainerActive]: !active,
    }
  )

  return (
    <div
      className={containerClassName}
      style={scssExampleElementContainerStyle}
    >zadanie5
      <button className={styles.buttonClass} onClick={handleClick}>i ponownie zmień kolor typie</button>
      <input type="text" value={color} onChange={handleChange} />
      <div className={styles.container}>
        test
      </div>
    </div>
  )
}

export default ClassnameExample;