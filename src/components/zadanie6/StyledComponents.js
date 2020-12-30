import React, { useState } from 'react';
import { StyledContainer, StyledInput } from './style';

function StyledComponents() {
  const [ color, setColor ] = useState('');

  const handleColor = e => setColor(e.target.value);
  return (
    <StyledContainer color={color}>zadanie6
      <StyledInput value={color} onChange={handleColor} />
    </StyledContainer>
  )
};

export default StyledComponents;