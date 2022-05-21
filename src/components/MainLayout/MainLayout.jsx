import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ScrollToTop } from "react-to-top";
import AppHeader from "../AppHeader";

const MainLayout = () => (
  <div>
    <AppHeader />
    <Main>
      <Outlet />
    </Main>
    <ScrollToTop
      bgColor="#F66B0E"
      size={60}
      strokeWidth={2}
      symbolSize={25}
      symbol="&#11181;"
    />
  </div>
);

const Main = styled.main`
  min-height: calc(100vh - ${(p) => p.theme.headerHeight});
  background-color: ${(p) => p.theme.mainBG};
`;

export default MainLayout;
