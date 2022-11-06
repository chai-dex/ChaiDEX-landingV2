import React from "react";
import Navbar from "./pages/Navbar";
import router from "./router";
import Footer from "./pages/Footer";

import { RouterProvider } from "react-router-dom";

function App() {
  return (
      <div className="container" style={{justifyContent:'center',alignItems:'center', alignContent:'center'}}>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </div>
  );
}

export default App;
