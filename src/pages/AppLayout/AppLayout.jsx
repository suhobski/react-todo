import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { AppContainer } from "./AppLayout.style";

const AppLayout = () => {
  return (
    <AppContainer>
      <Header />
      <h1>Content</h1>
      <Footer />
    </AppContainer>
  );
};

export default AppLayout;
