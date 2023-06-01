import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  gap: 20px;
  padding: 12px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
`;
const StyledLink = styled(NavLink)`
  color: #001219;
  text-decoration: none;

  &.active {
    color: #ef476f;
  }
`;

export default function SharedLayout() {
  return (
    <div>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Outlet />
    </div>
  );
}
