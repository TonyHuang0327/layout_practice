import React from 'react'
import {
    Typography,
    Box,
    TextField,
    Button,
    InputAdornment
 } from '@mui/material'
 import CloudIcon from '@mui/icons-material/Cloud';

export const SaaSHero = () => {
  return (
    <Box sx={{
        backgroundColor:'black',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }}>
        <Box sx={{
            width:'95%',
            display:'flex',
            justifyContent:'space-between',
            mt:3,
            mb:10
        }}>
            <Button variant="text" sx={{color:'white'}}><CloudIcon /></Button>
            <Button variant="outlined" sx={{
                backgroundColor:'rgba(255, 255, 255, 0.1)',
                color:'white',
                borderColor:'gray',
                borderRadius:'10px'
            }}>Join the beta</Button>
        </Box>
    <Typography variant="h2" color="white">Your daily list of</Typography>
    <Typography variant="h2" color="gray" sx={{mb:2}}>fresh freelancer leads</Typography>
    <Typography variant="body1" color="gray">Orbi is an agent that finds freelance leads for you. So you can</Typography>
    <Typography variant="body1" color="gray" sx={{mb:4}}>focus on doing great work. not hunting for it.</Typography>
    <TextField
    id="email"
    label="Enter your email"   
    slotProps={{
        input:{
            endAdornment:<InputAdornment position="end"><Button variant='contained' color='error' sx={{borderRadius:'10px',height:'50px',}}>Join the beta</Button></InputAdornment>,
        }
    }}
    sx={{
    width:'60%',
    '& .MuiOutlinedInput-root':{borderRadius:'10px'},
    '& .MuiInputBase-input': { color: 'white' },
    '& .MuiInputLabel-root': { color: 'gray' },
    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'gray' },
    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
    }}
  />
  <Typography variant="caption" color="gray" sx={{
    mt:2
  }}>First 100 sign-ups get a lifetime discount</Typography>
    </Box>
  )
}
