import { GiFilmSpool } from "react-icons/gi";
import {
  Wrapper,
  Logo,
  Title,
  Menu,
  Item,
  StyledLink,
} from "./Navigation.styled";

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

export default Navigation;
