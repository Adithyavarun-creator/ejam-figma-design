import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import { AppStyles } from "../styles/AppStyles";
import Footer from "../components/Footer";
import DesktopViewPage from "../components/DesktopView";

const Main = () => {
  return (
    <>
      <TopBar />
      <Header />
      <AppStyles>
        <DesktopViewPage />
      </AppStyles>
      <Footer />
    </>
  );
};

export default Main;
