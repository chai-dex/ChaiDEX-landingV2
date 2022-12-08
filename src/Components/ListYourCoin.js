import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { Box, Container, flexbox } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

const ListYourCoin = () => {
  const isMobile = useMediaQuery("(max-width:700px)");
  return (
    <Container
      sx={{
        mx: "2px",
        transform: "scale(0.8)",
        border: "1px solid #2382F7",
        borderRadius: "15px",
        background: "linear-gradient(to right bottom, #2382F7, #52A1FF)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          m: 2,
          minWidth: "400px",
          minHeight: "220px",
        }}
      >
        <Typography variant={isMobile ? "dxsBd" : "dxlSmbd"}>
          List Your Coin <span style={{ color: "orange" }}>.</span>
        </Typography>
        <Typography variant={isMobile ? "dxsBd" : "dmdMed"}>
          Get in touch with us and list your coin on ChaiDEX
        </Typography>

        <Box sx={{ mt: "15px", mb: "10px" }}>
          <Button variant="contained">
            
            <Typography variant={isMobile ? "tlgReg" : "txlReg"}> Get more info</Typography>
          </Button>
        </Box>
      </Box>

      {/* <React.Fragment>
      <CardContent>
        
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Box sx={{display:"flex",flexDirection:'column'}}>
                <Typography variant={isMobile ? "dxsBd" : "dmdBd"}>List Your Coin <span style={{ color: "orange" }}>.</span></Typography>
                <Typography variant={isMobile ? "dxsBd" : "dxsReg"} >get in touch with us and list your coin <br/> on ChaiDEX</Typography>
            
                <CardActions>
                    <Button  variant='contained'>Get more info</Button>
                </CardActions>
            </Box>
        </Box>
      </CardContent>
      </React.Fragment> */}
    </Container>
  );
};

export default ListYourCoin;

//   const bull = (
//     <Box
//       component="span"
//       sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//     >
//       •
//     </Box>
//   );

//   <React.Fragment>
//     <CardContent>
//       <Typography >word of the day
//       </Typography>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }}>
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </React.Fragment>;

//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{ListYourCoin}</Card>
//     </Box>
//   );
// };
