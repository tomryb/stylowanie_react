import React, { useState } from 'react';
import InlineBackgroundColor from './InlineBackgroundColor';
import CssExampleElement from './components/zadanie2/CssExampleElement';
import ScssExampleElement from './components/zadanie3/ScssExampleElement';
import BEMExampleHeader from './components/zadanie4/BEMExampleHeader';

const ContainerStyle = {
  color: "red",
  backgroundColor: "blue"
}

function App() {
  const [color, setColor] = useState(false)
  const handleClick = () => setColor(!color)

  return (
    <div style={ContainerStyle}>test
      <h1 style={{
        fontSize: '20px',
        backgroundColor: color ? 'green' : 'yellow',
      }}>Nagłówek</h1>
      <button onClick={handleClick}>Zmień kolor</button>
      <InlineBackgroundColor></InlineBackgroundColor>
      <CssExampleElement></CssExampleElement>
      <ScssExampleElement></ScssExampleElement>
      <BEMExampleHeader></BEMExampleHeader>
    </div>
  );
}

export default App;
