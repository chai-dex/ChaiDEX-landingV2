import React from "react";
import { Button, Card, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
const GetYourChait = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    
      <Card>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexGrow: 1,
            mt:'10px'
          }}
        >
          <Grid item xs={12} sm={6}>
            <Box maxHeight={"100px"} maxWidth={"800px"} sx={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:"center"}}>
              <Typography variant={isMobile ? "dmdSmbd" : "dlgSmbd"}>
                Get Your ChaiT Now !
              </Typography>
              <Typography sx={{mt:"5px"}} variant={isMobile ? "tsmReg" : "tlgReg"}>
                Get ChaiT airdropped to your wallet and start trading!
              </Typography>
              <Button sx={{mt:"15px"}} variant="contained">Claim yours Now</Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {isMobile ? (
                <img src="assets/wallet_mobile.png" alt="hero image pc" />
              ) : (
                <img src="/assets/wallet.png" />
              )}
            </Box>
          </Grid>
        </Grid>
      </Card>
    
      
  );
};

export default GetYourChait;
