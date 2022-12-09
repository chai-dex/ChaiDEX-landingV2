import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import SideDrawer from "./SideDrawer";
const MenuBar = ({ toggleMode, handleDrawerToggle, navigate, mobileOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Toolbar
      sx={{
        width: "100%",
        mt: "5px",
        // bgcolor: "red",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          mt: "5px",
          // bgcolor: "red",
        }}
      >
        <Box
          display={"flex"}
          alignItems="center"
          sx={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="/assets/chaiDEXlogo.png"
            height={"35px"}
            alt="chaidex logo"
            style={{ marginRight: "10px" }}
          />
          <Typography variant="dsmSmbd" noWrap>
            ChaiDEX
            <span style={{ color: "orange" }}>.</span>
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <SideDrawer
              isMobile={isMobile}
              mobileOpen={mobileOpen}
              handleDrawerToggle={handleDrawerToggle}
              toggleMode={toggleMode}
            />
          </>
        ) : (
          <Stack direction="row" spacing={2}>
            <Button color="inherit">
              <Typography variant="tmdMed">Home</Typography>
            </Button>

            <Button color="inherit">
              <Typography variant="tmdMed">Activities</Typography>
            </Button>
            <Button color="inherit">
              <Typography variant="tmdMed">WhitePapers</Typography>
            </Button>
            <Button variant="outlined" color="inherit">
              <Typography variant="tmdMed">App</Typography>
            </Button>
            <Button variant="contained" color="inherit">
              <Typography variant="tmdMed">ChaiWallet</Typography>
            </Button>
          </Stack>
        )}
      </Container>
    </Toolbar>
  );
};

export default MenuBar;
