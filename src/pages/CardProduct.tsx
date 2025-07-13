import "../style/cardproduct.css";

import { Box, Paper, Typography, Button, Chip } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import product from "../assets/teclado-mecanico-gamer-montech-mkey-pro-75-fb-rgb-wireless-bluetooth-switch-gateron-brown-ansi-65-azul-e-branco_217440.jpg";
export const Product = () => {
  return(
    <Paper
        sx={{
          height: "fit-content",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding:'10px'
        }}
      >
        <img className="product-pic" src={product} alt="product picture" />
        <Box sx={{
          display:'flex',
          width:'100%',
          gap:0.5
        }}>
        <img className="variety" src={product} alt="product picture" />
        <img className="variety" src={product} alt="product picture" />
        <img className="variety" src={product} alt="product picture" />
        <img className="variety" src={product} alt="product picture" />
        <img className="variety" src={product} alt="product picture" />
        </Box>
        <Box sx={{
          alignSelf:'flex-start',
          marginTop:'20px'
        }}>
          <Typography variant="body1" color="initial"sx={{ fontSize:'17px', fontWeight:'bold'}}>
            Montech Mkey Pro
          </Typography>
          <Chip label='75% keyboards' sx={{backgroundColor:'#FEF8F2', color:'#E57219'}}/>
          <Box sx={{
            display:'flex',
            gap:1,
            marginTop:'20px'
          }}>
          <Typography variant="body1" color="initial">
            $139.99
          </Typography>
          <Typography variant="body1" color="#AEB9C3" sx={{textDecoration:'line-through'}}>
            $169.99
          </Typography>
          </Box>
        </Box>
          <Button variant="contained" color="primary" sx={{ marginTop:'20px', backgroundColor:'#1E293B', width:'100%', borderRadius:'10px'}}>
            <ShoppingCartIcon />
            ADD TO CART
        </Button>
      </Paper>
  )
}

export const CardProduct = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns:'repeat(3,1fr)',
        width:'70%',
        gap:8,
        margin: "auto",
      }}
    >
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Box>
  );
};
