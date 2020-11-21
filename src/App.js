import React, { useState } from 'react';
import InlineBackgroundColor from './InlineBackgroundColor'


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
    </div>
  );
}

export default App;
