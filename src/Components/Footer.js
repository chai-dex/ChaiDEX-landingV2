import {
  Avatar,
  BottomNavigation,
  Divider,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Navigate } from "react-router-dom";
import { styled, Paper } from "@mui/material";
import Link from "@mui/material/Link";

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Toolbar
      sx={{
        width: "100%",
        mt: "5px",
        justifyContent: "space-between",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid
            Container
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
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
                <Grid item xs={12} sm={3}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Link underline="none" href="/">
                      Home
                    </Link>
                    <Link underline="none" href="/">
                      App
                    </Link>
                    <Link underline="none" href="/">
                      ChaiWallet
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Link underline="none" href="/">
                      Airdrop
                    </Link>
                    <Link underline="none" href="/">
                      Blogs
                    </Link>
                    <Link underline="none" href="/">
                      Subscribe
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Link underline="none" href="/">
                      Terms and Conditions
                    </Link>
                    <Link underline="none" href="/">
                      Privacy
                    </Link>
                    <Link underline="none" href="/">
                      Risk Disclosure
                    </Link>
                  </Box>
                </Grid>
                {/* 4 row */}
                <Grid item xs={12} sm={3}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Link underline="none" href="/">
                      Subscribe
                    </Link>
                    <Link underline="none" href="/">
                      ChaiTea Podcast
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
          </Grid>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "10px",
          }}
        >
          <Grid sx={{ flexGrow: 1 }} container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    sx={{ border: "1px solid " }}
                    alt="telegram"
                    src="/assets/cib_telegram-plane.png"
                  />
                  <Avatar
                    sx={{ border: "1px solid " }}
                    alt="Instagram"
                    src="/assets/instagram.png "
                  />
                  <Avatar
                    sx={{ border: "1px solid " }}
                    alt="twitter"
                    src="/assets/twitter.png"
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography variant="tsmMed">
                  A Product of <span variant="tsmBd">ChaiDEX</span>{" "}
                  <span style={{ color: "orange" }}>.</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography>© 2022 ChaiDEX. All rights reserved</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Toolbar>
  );
};

export default Footer;
