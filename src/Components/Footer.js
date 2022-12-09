import { Avatar, ButtonBase, Divider, Grid, Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import React from "react";
import { Link } from "@mui/material";
import { Navigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            {/* 1 set */}
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
            <Grid item xs={12} sm={3}>
              <Box>
                <Box>
                  <Link underline="none" href="/">
                    Home
                  </Link>
                </Box>
                <Box>
                  <Link underline="none" href="/">
                    App
                  </Link>
                </Box>
                <Box>
                  <Link underline="none" href="/">
                    ChaiWallet
                  </Link>
                </Box>
              </Box>
            </Grid>
            {/* 2set */}

            <Grid item xs={12} sm={3}>
              <Box>
                <Box>
                  <Link underline="none" href="/">
                    Airdrop
                  </Link>
                </Box>
                <Box>
                  <Link underline="none" href="/">
                    Blogs
                  </Link>
                </Box>
                <Box>
                  <Link underline="none" href="/">
                    Subscribe
                  </Link>
                </Box>
              </Box>
            </Grid>
            {/* 3 set */}
            <Grid item xs={12} sm={3}>
              <Box>
                <Link underline="none" href="/">
                  Terms and Conditions
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/">
                  Privacy
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/">
                  Risk Disclosure
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{mt:"20px"}}/>
          <Box

            textAlign="center"
            sx={{ display: "flex", justifyContent: "ccenter", }}
            pt={{ xs: 5, s: 10 }}
            pb={{ xs: 5, sm: 0}}
          >
            <Grid container spacing={5}>
              <Grid item xs={12} sm={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <ButtonBase>
                      <Avatar
                        sx={{ border: "1px solid " }}
                        alt="telegram"
                        src="/assets/telegram_whiet.png"
                      />
                    </ButtonBase>
                    <ButtonBase>
                      <Avatar
                        sx={{ border: "1px solid " }}
                        alt="Instagram"
                        src="/assets/instagram_white.png "
                      />
                    </ButtonBase>
                    <ButtonBase>
                      <Avatar
                        sx={{ border: "1px solid " }}
                        alt="twitter"
                        src="/assets/twitter-white.png"
                      />
                    </ButtonBase>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
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
      </Box>
    </footer>
  );
};

export default Footer;
