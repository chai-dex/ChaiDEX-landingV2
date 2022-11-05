import React from "react";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import ListCoin from "./pages/ListCoin";
import WhyChaiDEX from "./pages/WhyChaiDEX";
import GetyourChait from "./pages/GetyourChait";
import Roadmap from "./pages/Roadmap";
import LastInfo from "./pages/LastInfo";
import Footer from "./pages/Footer";
function App() {
  return (
      <div className="container">
        <Navbar />
        <Home />
        <ListCoin />
        <WhyChaiDEX />
        <GetyourChait />
        <Roadmap />
        <LastInfo />
        <Footer />
      </div>
  );
}

export default App;
