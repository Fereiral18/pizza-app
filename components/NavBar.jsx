import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import "./styles.css"





const pages = ['Productos', 'Precios'];

let logo = 'https://cdni.iconscout.com/illustration/premium/thumb/pizza-3517875-2938927.png?f=webp'


export const NavBar=()=> {
  


  

  

  return (
    <AppBar position="static" sx={{backgroundColor: 'white', '&:hover': {
      backgroundColor: '#aaaaaa',
      transform: 'scale(1.05)',
    },}}>
      <Container maxWidth="xl">
        <Toolbar >
          
       
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
              <img src={logo} alt="logo" className='logo' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
               
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ width:'10%', height:'50px'}}>
            <a href="https://wa.me/5804120779864" target='_blank'>

             <WhatsAppIcon sx={{fontSize:'300%', color:'black'}}/>
            </a>
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
