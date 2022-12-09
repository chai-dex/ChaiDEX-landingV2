import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
const WhyChaidex = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          mt: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 1st card */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              minHeight: "400px",
              maxWidth: "330px",
              p: 2,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              {theme.palette.mode === "dark" ? (
                <img src="/assets/trade-earn-dark.png" />
              ) : (
                <img src="/assets/trade-earn-light.png" />
              )}
            </Box>
            <Typography gutterBottom component="div">
              Trade and Earn
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Trade multiple times without worrying about gas fees, and increase
              your profit by trading straight with INRC Stable Coin which
              removes any conversion complexity
            </Typography>
          </Card>
        </Grid>
        {/* 2nd card */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", mt: "10px" }}>
            <Card
              sx={{
                minHeight: "400px",
                maxWidth: "330px",
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
              <Typography sx={{ textAlign: "center" }}>
                Access to top Blockchains/ Protocol like Ethereum, Binance Smart
                Chain, Polygon, etc. with just single wallet
              </Typography>
            </Card>
          </Box>
        </Grid>
        {/* 3rd card */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", mt: "10px" }}>
            <Card
              sx={{
                minHeight: "400px",
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
                <img src="/assets/pool.png" />
              </Box>
              <Typography gutterBottom component="div">
                Know Your Pool
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Simplifies DEX trading by performing transactions at real-time
                market prices. Uses publicly viewable smart contracts to keep
                security audit information transparent.
              </Typography>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyChaidex;
