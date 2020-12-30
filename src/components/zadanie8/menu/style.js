import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: ${({theme}) => theme.color.blue};
  &.active {
    border-bottom: 1px solid ${({theme}) => theme.color.blue};
  }
`