import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledLink className={match ? "active" : null} to={to} {...props}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  padding: 10px;
  border: 1px solid ${(p) => p.theme.altColor};
  border-radius: 10px;
  color: ${(p) => p.theme.altBG};
  font-family: ${(p) => p.theme.mainFF}, sans-serif;
  transition: border-color ${(p) => p.theme.transition},
    color ${(p) => p.theme.transition};
  &.active,
  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.accentColor};
    border-color: ${(p) => p.theme.accentColor};
  }
`;

export default CustomLink;
