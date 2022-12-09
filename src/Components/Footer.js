import { BottomNavigation, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Navigate } from "react-router-dom";
import { styled, Paper } from "@mui/material";
import Link from "@mui/material/Link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        mt: "5px",
        justifyContent: "space-between",
      }}
    >
      <Container sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            display={"flex"}
            alignItems="center"
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              Navigate("/");
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
          {/* menus */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Grid sx={{ flexGrow: 1 }} container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Link underline="none" href="/">
                    Link
                  </Link>
                  <Link underline="none" href="/">
                    Link
                  </Link>
                  <Link underline="none" href="/">
                    Link
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Link underline="none" href="/">
                    Link
                  </Link>
                  <Link underline="none" href="/">
                    Link
                  </Link>
                  <Link underline="none" href="/">
                    Link
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Link underline="none" href="/">
                    Link
                  </Link>
                  <Link underline="none" href="/">
                    Link
                  </Link>
                  <Link underline="none" href="/">
                    Link
                  </Link>
                </Box>
              </Grid>
            </Grid>

            {/* <Grid sx={{ flexGrow: 1 }} container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{display:"flex",flexDirection:"column"}}>
                  <Link href="/" underline="none">Home</Link>
                  <Link href="/" underline="none">Home</Link>
                  <Link href="/" underline="none">Home</Link>
                </Box>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </BottomNavigation>
  );
};

export default Footer;
