import styled from "styled-components";

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: 320px) {
    width: 320px;

    padding: 0 30px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 70px;
  }
  @media screen and (min-width: 1024px) {
    min-width: 1024px;
    padding: 0 30px;
  }
`;

export default Container;
