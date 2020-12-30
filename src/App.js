import React, { useState } from 'react';
import InlineBackgroundColor from './components/zadanie1/InlineBackgroundColor';
import CssExampleElement from './components/zadanie2/CssExampleElement';
import ScssExampleElement from './components/zadanie3/ScssExampleElement';
import BEMExampleHeader from './components/zadanie4/BEMExampleHeader';
import ClassnameExample from './components/zadanie5/ClassnameExample';

const ContainerStyle = {
  color: "red",
  backgroundColor: "blue"
}

const HeaderSize = {
  fontSize: '20px'
}

function App() {
  const [color, setColor] = useState(false)
  const handleClick = () => setColor(!color)

  const headerStyle = {
    ...HeaderSize,
    backgroundColor: color ? 'green' : 'yellow',
  }

  return (
    <div style={ContainerStyle}>test
      <h1 style={headerStyle}>Nagłówek</h1>
      <button onClick={handleClick}>Zmień kolor</button>
      <InlineBackgroundColor></InlineBackgroundColor>
      <CssExampleElement></CssExampleElement>
      <ScssExampleElement></ScssExampleElement>
      <BEMExampleHeader></BEMExampleHeader>
      <ClassnameExample></ClassnameExample>
    </div>
  );
}

export default App;
