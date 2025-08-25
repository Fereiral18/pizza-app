import { Container, keyframes, styled, Typography } from "@mui/material";
import { NavBar } from "../components/NavBar";
import Box from "@mui/material/Box";
import { MenuItems } from "../components/MenuItems";
import { red, yellow } from "@mui/material/colors";
import { Policy } from "@mui/icons-material";

export const App = () => {

  
  const oscill = keyframes`
  100% {
    transform: translateY(3px) rotate(0.01deg);
  }
`;
function AnimacionBandera() {
  return (
    <Box
      sx={{

        animation: `${oscill} 2s ease-in-out infinite alternate`,
        WebkitAnimation: `${oscill} 2s ease-in-out infinite alternate`,
        MozAnimation: `${oscill} 2s ease-in-out infinite alternate`,
        msAnimation: `${oscill} 2s ease-in-out infinite alternate`,
        maxWidth: '100%',
        position: 'relative',
        height: '100%',
        width: '270px',
        minWidth: "150px",
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        outline: '1px solid rgba(255, 255, 255, 0)',
        
        '&:hover': {
          outline: '1px solid rgba(255, 255, 255, 0.3)',
        }
      }}
    >
        
            

                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpiMzPrhK5nrYBlCxjjWIMnoJ2oVPri-stzQ&s" width={200} className="bandera"  alt="" />
            
    </Box>
  );
}
  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  const AnimatedBox = styled("div")`
    animation: ${fadeIn} 5s ease-out forwards;
  `;
  return (
    <>
      <Container maxWidth={"xl"}>
        <Box sx={{ width: "100%" }}>
          <NavBar />
        </Box>

        <Container>
          <AnimatedBox
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "transparent",
            }}
          >
            <Typography
              sx={{
                fontSize: "50px",
                color: "white",
                fontStyle: "italic",
              }}
            >
              ¡Bienvenid@s!
            </Typography>
            <Box
              
            >
              <Typography
                sx={{
                  fontSize: "7vw",
                  color: "white",
                  fontWeight: 1000,
                }}
              >
                Sabores Venezolanos
              </Typography>
            </Box>
          <AnimacionBandera/>
           
          </AnimatedBox>

          <MenuItems />
        </Container>
      </Container>
    </>
  );
};
