import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export const drawerWidth = 280;
const SideDrawer = ({
  mobileOpen,
  toggleMode,
  isMobile,
  handleDrawerToggle,
}) => {
  const navigate = useNavigate();
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      anchor={isMobile ? "right" : "left"}
      onClose={handleDrawerToggle}
      elevation={0}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
      PaperProps={{
        style: {
          border: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        sx={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="/assets/chaiDEXlogo.png" height={"45px"} alt="chaidex logo" />
        <Typography variant="dSmBd" noWrap sx={{}}>
          ChaiDEX
          <span style={{ color: "orange" }}>.</span>
        </Typography>
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
