import React from "react";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import ListCoin from "./pages/ListCoin";
import WhyChaiDEX from "./pages/WhyChaiDEX";
import GetyourChait from "./pages/GetyourChait";
import Roadmap from "./pages/Roadmap";
import LastInfo from "./pages/LastInfo";
import Footer from "./pages/Footer";
import TermsandConditions from "./pages/TermsandConditions";

function App() {
  return (
      <div className="container" style={{justifyContent:'center',alignItems:'center', alignContent:'center'}}>
        <Navbar />
        <Home />
        <ListCoin />
        <WhyChaiDEX />
        <GetyourChait />
        <Roadmap />
        <LastInfo />
        <Footer />
        <TermsandConditions />
      </div>
  );
}

export default App;
