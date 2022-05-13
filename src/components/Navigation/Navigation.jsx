import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "utils/breakpoints";
import { GiFilmSpool } from "react-icons/gi";
const Navigation = () => (
  <Wrapper>
    <Logo to="/">
      <GiFilmSpool color={"#F66B0E"} size={30} />
      <Title>Filmoteka</Title>
    </Logo>
    <Menu>
      <Item>
        <StyledLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/"
        >
          Home
        </StyledLink>
      </Item>
      <Item>
        <StyledLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/movies"
        >
          Movies
        </StyledLink>
      </Item>
    </Menu>
  </Wrapper>
);

const Wrapper = styled.nav`
  display: flex;

  align-items: center;
`;

const Logo = styled(NavLink)`
  display: flex;
  align-items: flex-start;
`;

const Title = styled.h1`
  display: none;
  margin-left: 8px;
  color: ${(p) => p.theme.accentColor};
  font-size: 24px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;
  @media ${breakpoints.tablet} {
    display: flex;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Item = styled.li`
  margin-left: 15px;
  &:first-child {
    margin-left: 0;
  }
`;

const StyledLink = styled(NavLink)`
  padding-bottom: 12px;
  color: ${(p) => p.theme.mainColor};
  font-size: 18px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;
  border-bottom: 3px solid transparent;
  transition: color ${(p) => p.theme.transition};
  &.active {
    color: ${(p) => p.theme.accentColor};
    border-bottom: 3px solid ${(p) => p.theme.accentColor};
  }
  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.accentColor};
  }
`;
export default Navigation;
