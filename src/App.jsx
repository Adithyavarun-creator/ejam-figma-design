import React from "react";
import { AppStyles } from "./styles/AppStyles";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import BodyPage from "./components/MobileView";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DesktopPage from "./pages/DesktopPage";
import MobilePage from "./pages/MobilePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/desktop-view" element={<DesktopPage />} />
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
