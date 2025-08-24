import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import "./styles.css";

const pages = ["Productos", "contacto"];

export const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'unset',
        
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
         <Box sx={{
          width:"80px",
          height:"80px",
          
          
         }}>
         <img src="/src/assets/c0613559-b9c7-44aa-a7bd-4be79bef1d3f.jpeg"  class="logo" alt="" />
         </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ width: "10%", height: "50px" }}>
            <a href="https://wa.me/542613460321" target="_blank">
              <WhatsAppIcon sx={{ fontSize: "300%", color: "green" }} />
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
