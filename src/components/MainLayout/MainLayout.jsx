import { Outlet } from "react-router-dom";
import styled from "styled-components";

import AppHeader from "../AppHeader";

const MainLayout = () => (
  <Wrapper>
    <AppHeader />
    <Main>
      <Outlet />
    </Main>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.main`
  min-height: calc(100vh - ${(p) => p.theme.headerHeight});
  background-color: ${(p) => p.theme.mainBG};
`;

export default MainLayout;
