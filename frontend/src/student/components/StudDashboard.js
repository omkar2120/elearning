// import { Divider } from "@mui/material";
import React from "react";
import styled from "styled-components";
// import StudNav from '../Pages/StudNav';
import MainContent from "./MainContent";
// import StudSidebar from '../Pages/StudSidebar';
import Sidebar from "./Sidebar";

function StudDashboard() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 108vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default StudDashboard;
