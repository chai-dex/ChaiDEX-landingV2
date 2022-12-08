import React from "react";
import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListYourCoin from "../Components/ListYourCoin";
import WhyChaidex from "../Components/WhyChaidex";
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
      <Box sx={{ display:'flex',  flexDirection:{sm:"row"}, justifyContent: "flex-end"}}>
        <Box
          sx={{
            display:'flex',
            justifyContent: "center",
            flexDirection: "column",
            
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
              ChaiWallet
            </Button>
          </Box>
        </Box>
        <Box>
          {isMobile ? (
            <img src="/assets/hero mobile.png" />
          ) : (
            <img src="/assets/hero image.png" alt="hero image pc" />
          )}
        </Box>
      </Box>
            <Box sx={{mt:'55px'}}>
            <WhyChaidex/>
            </Box>
    </Container>
  );
};

export default HomePage;
