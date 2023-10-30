import React from "react";
import { AppStyles } from "./styles/AppStyles";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import BodyPage from "./components/MobileView";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Main from "./pages/Main";
import MobilePage from "./pages/MobilePage";
import MobileViewPage from "./components/MobileView";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/desktop-view" element={<Main />} />
        <Route path="/mobile-view" element={<MobilePage />} />
      </Routes>
    </>
  );
};

export default App;

/**
 *<TopBar />
      <Header />
      <AppStyles>
        <BodyPage />
      </AppStyles>
      <Footer />
 */
