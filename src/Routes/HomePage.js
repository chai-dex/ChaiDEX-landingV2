import React from "react";
import { Container, Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ListYourCoin from "../Components/ListYourCoin";
import WhyChaidex from "../Components/WhyChaidex";
import TradeStables from "../Components/TradeStables";
import GetYourChait from "../Components/GetYourChait";
import useMediaQuery from "@mui/material/useMediaQuery";

import Footer from "./../Components/Footer";

const HomePage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Container
      sx={{
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        mt: "5px",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexGrow: 1,
          width: "100%",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            <Typography variant={isMobile ? "dmdSmbd" : "dlgSmbd"}>
              Low gas fees No wrap tokens V3 DEX for the P2P Trade.
            </Typography>
            <Typography variant={isMobile ? "tsmReg" : "dxsReg"}>
              Pick the best rate, low gas fees & high transaction speed for your
              trade.
            </Typography>
            <Box>
              <Button sx={{ mt: "5px" }} variant="contained">
                Chai Wallet
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            {isMobile ? (
              ""
            ) : (
              <img
                src="/assets/hero image.png"
                alt="hero image pc"
                width={"100%"}
              />
            )}
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: "55px" }}>
        <ListYourCoin />
        <WhyChaidex />
        <TradeStables />
        <GetYourChait />
        <Footer />
      </Box>
    </Container>
  );
};

export default HomePage;
