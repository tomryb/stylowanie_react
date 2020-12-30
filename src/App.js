import React, { useState } from 'react';
import InlineBackgroundColor from './components/zadanie1/InlineBackgroundColor';
import CssExampleElement from './components/zadanie2/CssExampleElement';
import ScssExampleElement from './components/zadanie3/ScssExampleElement';
import BEMExampleHeader from './components/zadanie4/BEMExampleHeader';
import ClassnameExample from './components/zadanie5/ClassnameExample';
import StyledComponents from './components/zadanie6/StyledComponents';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/zadanie8/pages/Home';
import Contact from './components/zadanie8/pages/Contact';
import Menu from './components/zadanie8/menu/Menu';
import { ThemeProvider } from 'styled-components';
import { theme, themeInverted } from './components/zadanie8/utils/Theme';

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
  const [active, setActive] = useState(false);
  const handleSecondClick = () => setActive(!active);

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
      <StyledComponents></StyledComponents>
      <div>
        <button onClick={handleSecondClick}>a zmień kolor ponownie typie</button>
        <ThemeProvider theme={active ? theme : themeInverted}>
          <BrowserRouter>
            <Menu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
