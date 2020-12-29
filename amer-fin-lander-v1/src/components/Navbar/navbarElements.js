import styled from 'styled-components';
import Logo from '../../img/logo.svg';

export const Nav = styled.nav`
  background: transparent;
  height: auto;
  display: flex;
  justify-content: left;
`;

export const NavLogo = styled.div`
  background-image: url(${Logo});
  background-size: cover;
  background-repeat: no-repeat;
  height: 13vh;
  width: 26vh;
  display: flex;
  flex-grow: 1;
  position: absolute;
  top: 1vh;
  left: 1vh;
  border-radius: 18px;

  &:hover {
    cursor: pointer;
  }
`;
