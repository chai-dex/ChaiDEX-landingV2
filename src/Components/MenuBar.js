import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";

const MenuBar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: "background.default" }}>
        <Container
          sx={{
            flexGrow: 1,
            backgroundColor: "background.default",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ChaiDEX
          </Typography>
          <Button color="inherit">Login</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
