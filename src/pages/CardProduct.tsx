import React from 'react'
import '../style/cardproduct.css'

import {
    Box,
    Paper, Typography, Button
} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import product from '../assets/teclado-mecanico-gamer-montech-mkey-pro-75-fb-rgb-wireless-bluetooth-switch-gateron-brown-ansi-65-azul-e-branco_217440.jpg'

export const CardProduct = () => {
  return (
    <Box sx={{
        display:'grid',
        height:'90vh',
    }}>
        <Paper sx={{
            height:'40%',
            width:'40%',
            backgroundColor:'primary',
            borderRadius:'10px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            paddingTop:'10px'
        }}>
            <img className='product-pic' src={product} alt="product picture" />
            <Box>
                <Typography variant="body1" color="initial">Montech Mkey Pro</Typography>
                <Typography variant="body1" color="initial">Women Shoes</Typography>
                <Typography variant="body1" color="initial">$139.99</Typography>
            </Box>
            <Button variant="contained" color="primary">
                <ShoppingCartIcon />
              ADD TO CART
            </Button>
        </Paper>
    </Box>
  )
}
