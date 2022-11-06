import { createBrowserRouter } from "react-router-dom";

// import pages here

import Home from "./pages/Home";
import TermsandConditions from "./pages/TermsandConditions";

const router = createBrowserRouter([
    
    //define route paths and elements here in this format
    {
        path:'/',
        element:<Home/>
    },{
        path:'/terms',
        element:<TermsandConditions/>
    },
])

export default router;