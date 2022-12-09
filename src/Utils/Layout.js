import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SideDrawer from "../Components/SideDrawer";
import MenuBar from "../Components/MenuBar";
const Layout = ({ toggleMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();
  return (
    <div>
      <MenuBar
        isMobile={isMobile}
        handleDrawerToggle={handleDrawerToggle}
        navigate={navigate}
        toggleMode={toggleMode}
        mobileOpen={mobileOpen}
      />
    </div>
  );
};

export default Layout;
