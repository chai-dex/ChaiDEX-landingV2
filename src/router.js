import { createBrowserRouter } from "react-router-dom";

// import pages here

import Home from "./pages/Home";
import TermsandConditions from "./pages/TermsandConditions";
import RiskDisclosure from "./pages/RiskDIsclosure";
import PrivacyPolicy from "./pages/PrivacyPolicy";
const router = createBrowserRouter([
  //define route paths and elements here in this format
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/terms",
    element: <TermsandConditions />,
  },
  
  {
    path: "/riskdisclosure",
    element: <RiskDisclosure />,
  },
  
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />,
  },

]);

export default router;
