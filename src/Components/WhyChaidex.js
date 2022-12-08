import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
const WhyChaidex = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3} sx={{ display: "flex", mt: "10px",alignItems:"center",justifyContent:'center' }}>
        <Grid item xs={12} sm={4}>
          <Box>
            <Card
              sx={{
                minHeight: "380px",
                maxWidth: "330px",
                m: 2,
                p: 2,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box>
                <img src="/assets/trade-earn.png" />
              </Box>

              <Typography gutterBottom component="div">
                Trade and Earn
              </Typography>
              <Typography>
                Trade multiple times without worrying about gas fees, and
                increase your profit by trading straight with INRC Stable Coin
                which removes any conversion complexity
              </Typography>
            </Card>
          </Box>
        </Grid>
        {/* 2 card */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: "flex", mt: "10px" }}>
            <Box>
              <Card
                sx={{
                  minHeight: "380px",
                  maxWidth: "330px",
                  m: 2,
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box>
                  <img src="/assets/multiwallet.png" />
                </Box>

                <Typography gutterBottom component="div">
                  Multi-Chain Wallet
                </Typography>
                <Typography>
                  Access to top Blockchains/ Protocol like Ethereum, Binance
                  Smart Chain, Polygon, etc. with just single wallet
                </Typography>
              </Card>
            </Box>
          </Box>
        </Grid>

        {/* 3 card */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: "flex", mt: "10px" }}>
            <Box>
              <Card
                sx={{
                  minHeight: "380px",
                  maxWidth: "330px",
                  m: 2,
                  display: "flex",
                  p: 2,
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box>
                  <img src="/assets/pool.png" />
                </Box>

                <Typography gutterBottom component="div">
                  Know Your Pool
                </Typography>
                <Typography>
                  Simplifies DEX trading by performing transactions at real-time
                  market prices. Uses publicly viewable smart contracts to keep
                  security audit information transparent.
                </Typography>
              </Card>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyChaidex;
