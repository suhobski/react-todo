import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import { AppContainer } from "./AppLayout.style";

const AppLayout = () => {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Home />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
};

export default AppLayout;
