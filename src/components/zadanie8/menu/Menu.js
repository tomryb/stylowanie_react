import React from 'react';
import { StyledLink } from './style';

function Menu() {
  return (
    <nav>
      <StyledLink to="/" exact={true}>
        Home
      </StyledLink>
      <StyledLink to="/contact">
        Contact
      </StyledLink>
    </nav>
  )
}

export default Menu;