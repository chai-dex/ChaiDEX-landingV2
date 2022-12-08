import React from "react";
import { Container, Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ListYourCoin from "../Components/ListYourCoin";
import WhyChaidex from "../Components/WhyChaidex";
import Paper from "@mui/material/Paper";
import TradeStables from "../Components/TradeStables"
import GetYourChait from "../Components/GetYourChait";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
const HomePage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  
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
      <Grid container spacing={3} sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexGrow: 1,
          }}>
        
          
     
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
                Pick the best rate, low gas fees & high transaction speed for
                your trade.
              </Typography>
              <Box>
                <Button sx={{ mt: "5px" }} variant="contained">
                  ChaiWallet
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{display:"flex",justifyContent:'flex-start'}}>
              {isMobile ? (
                <img src="/assets/hero mobile.png" />
              ) : (
                <img src="/assets/hero image.png" alt="hero image pc" />
              )}
            </Box>
          </Grid>
       
      </Grid>
      <Box sx={{ mt: "55px" }}>
        <ListYourCoin/>
        <WhyChaidex />
        <TradeStables/>
        <GetYourChait/>
      </Box>
    </Container>
  );
};

export default HomePage;
