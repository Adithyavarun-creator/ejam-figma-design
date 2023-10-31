import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import { AppStyles } from "../styles/AppStyles";
import Footer from "../components/Footer";
import MobileViewPage from "../components/MobileView";
import { MobilePageStyles } from "../styles/MobilePageStyles";

const Main = () => {
  return (
    <>
      <TopBar />
      <Header />
      <MobileViewPage />
      <Footer />
    </>
  );
};

export default Main;
