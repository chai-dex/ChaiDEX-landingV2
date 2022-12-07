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
import { useLocation, useNavigate } from "react-router-dom";

const MenuBar = ({ toggleMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Stack direction="row" spacing={2}>
            <Button color="inherit">
              <Typography variant="tmdMed">Home</Typography>
            </Button>
            <Button color="inherit">
              <Typography variant="tmdMed">P2P</Typography>
            </Button>
            <Button color="inherit">
              <Typography variant="tmdMed">QuickBuy</Typography>
            </Button>
            <Button color="inherit">
              <Typography variant="tmdMed">Activities</Typography>
            </Button>
            <Button color="inherit">
              <Typography variant="tmdMed">WhitePapers</Typography>
            </Button>
          </Stack>
        )}
      </Container>
    </Toolbar>
  );
};

export default MenuBar;
