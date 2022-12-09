import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {
  Box,
  Button,
  Container,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import SideDrawer from "./SideDrawer";
const MenuBar = ({ toggleMode, handleDrawerToggle, navigate, mobileOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [whitepaper, setWhitePaper] = React.useState(null);
  const WPOpen = Boolean(whitepaper);
  const handleWhitePaperClick = (e) => setWhitePaper(e.currentTarget);
  const handleWhitePaperClose = (event) => {
    setWhitePaper(null);
  };

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
            <Button color="inherit" onClick={handleWhitePaperClick}>
              <Typography variant="tmdMed">WhitePapers</Typography>
            </Button>
            <Menu
              id="whitepaper-menu"
              anchorEl={whitepaper}
              open={WPOpen}
              onClose={handleWhitePaperClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleWhitePaperClose}>
                <a href="/whitepapers/ChaiDEXWhitepaper-v1.pdf">ChaiDEX</a>
              </MenuItem>
              <MenuItem onClick={handleWhitePaperClose}>
                <a href="/whitepapers/ChaiWalletWhitepaper-v1.pdf">
                  Chai Wallet
                </a>
              </MenuItem>
              <MenuItem onClick={handleWhitePaperClose}>
                <a href="/whitepapers/ChaiTWhitepaper-v1.pdf">ChaiT</a>
              </MenuItem>
            </Menu>
            <Button variant="outlined" color="success">
              <Typography variant="tmdMed">App</Typography>
            </Button>
            <Button variant="contained" color="primary">
              <Typography variant="tmdMed">ChaiWallet</Typography>
            </Button>
          </Stack>
        )}
      </Container>
    </Toolbar>
  );
};

export default MenuBar;
