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
                <Box sx={{ my: 2 }}>
                  <a href="/"  >
                    Home
                  </a>
                </Box>
                <Box sx={{ my: 2 }}>
                  <a href="https://exchange.chaidex.com/" target="_blank">App</a>
                </Box>
                <Box sx={{ my: 2 }}>
                  <a href="https://wallet.chaidex.com/" target="_blank">
                    Chai Wallet
                  </a>
                </Box>
              </Box>
            </Grid>
            {/* 2set */}

            <Grid item xs={12} sm={3}>
              <Box>
                <Box sx={{ my: 2 }}>
                <a href="/"  target="_blank">
                    Airdrop
                  </a>
                </Box>
                <Box sx={{ my: 2 }}>
                <a href="/"  target="_blank">
                    Blogs
                  </a>
                </Box>
                <Box sx={{ my: 2 }}>
                <a href="/"  target="_blank">
                    Subscribe
                  </a>
                </Box>
              </Box>
            </Grid>
            {/* 3 set */}
            <Grid item xs={12} sm={3}>
              <Box sx={{ my: 2 }}>
                <a href="/public/assets/Terms & Conditions.pdf">Terms and Conditions</a>
              </Box>
              <Box sx={{ my: 2 }}>
              <a href="/public/assets/Privacy Policy.pdf"  target="_blank">
                  Privacy
                </a>
              </Box>
              <Box sx={{ my: 2 }}>
              <a href="/assets/Responsible Risk Disclosure Policy.pdf"  target="_blank">
                  Risk Disclosure
                </a>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ mt: "20px" }} />
          <Box
            textAlign="center"
            sx={{ display: "flex", justifyContent: "ccenter" }}
            pt={{ xs: 5, s: 10 }}
            pb={{ xs: 5, sm: 0 }}
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
                  <a href="https://t.me/+Bac1ly5TZ_w3YmRl"  target="_blank">
                      <Avatar
                        sx={{ border: "1px solid " }}
                        alt="telegram"
                        src="/assets/telegram_whiet.png"
                      />
                    </a>
                    <ButtonBase>
                      <Avatar
                        sx={{ border: "1px solid " }}
                        alt="Instagram"
                        src="/assets/instagram_white.png "
                      />
                    </ButtonBase>
                  
                    <a href="https://twitter.com/chaidexHQ"  target="_blank">
                      <Avatar
                        sx={{ border: "1px solid " }}
                        alt="twitter"
                        src="/assets/twitter-white.png"
                      />
                      </a>
                   
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
