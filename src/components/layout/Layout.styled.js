import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px;
  font-size: 26px;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;
`;

export const Main = styled.main`
  padding: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  & a {
    text-decoration-line: none;
  }
  & .active {
    color: red;
  }
`;
