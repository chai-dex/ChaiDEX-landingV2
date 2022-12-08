import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Box } from "@mui/system";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const LastPage = () => {
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
        spacing={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {isMobile ? (
              <img src="/assets/tradeDex.png" height="500px"/>
            ) : (
              <img src="assets/tradeDex.png" alt="hero image pc" />
            )}
          </Box>
        </Grid>

        {/* text */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems:"center",
              flexDirection: "column",
              flexGrow: 1,

            }}
          >
            <Typography variant={isMobile ? "dmdSmbd" : "dlgSmbd"}>
              Trade Stablecoins with UltraLow Costs.
            </Typography>
            <Typography sx={{mt:"10px"}} variant={isMobile ? "tsmReg" : "dxsReg"}>
              Use ChaiDEX Convert! ChaiDEX Convert Improves For INRC Pairs!
              INRC/ ETH ; INRC/ BNB; INRC/ USDC; INRC/ USDT; INRC/ BUSD
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LastPage;
