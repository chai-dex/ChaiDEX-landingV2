import React from "react";
import Navbar from "./pages/Navbar";
import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
      <div className="container" style={{justifyContent:'center',alignItems:'center', alignContent:'center'}}>
        <Navbar />
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
