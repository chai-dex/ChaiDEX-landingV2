import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Box } from "@mui/system";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
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
        spacing={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {isMobile ? (
              <img src="/assets/tradeDex.png" height="500px" />
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
              alignItems: "center",
              flexDirection: "column",
              px: 2,
            }}
          >
            <Typography
              variant={isMobile ? "dmdSmbd" : "dlgSmbd"}
              sx={{ maxWidth: "90vw" }}
            >
              Trade Stablecoins with UltraLow Costs.
            </Typography>
            <Typography
              sx={{ mt: "10px",maxWidth: "90vw" }}
              variant={isMobile ? "tsmReg" : "dxsReg"}
            >
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
