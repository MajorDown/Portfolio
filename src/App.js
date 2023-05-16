import React, { createContext } from "react";
import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimBack from "./components/AnimBack";
import OwnerBar from "./components/OwnerBar";
import MainContainer from "./components/MainContainer";
import { data } from "./data";

export const PortfolioContext = createContext(data);

function App() {
  return (
    <BrowserRouter>
      <PortfolioContext.Provider value={data}>
        <AnimBack />
        <Header />
        <main>
          <OwnerBar />
          <MainContainer>
            <Router />
          </MainContainer>
        </main>
        <Footer />
      </PortfolioContext.Provider>
    </BrowserRouter>
  );
}

export default App;
