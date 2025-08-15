
import {  Container, Typography} from '@mui/material';
import { NavBar } from '../components/NavBar';
import Box from '@mui/material/Box';
import { MenuItems } from '../components/MenuItems';






export const App = () => {
let namePizzeria = 'mis dos reinas'

  return (
   <>
   <Container  maxWidth={'xl'} >
    <Box sx={{ width:'100%'}}>

   <NavBar/>
    </Box>
    
   <Container sx={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
   <h1>¡Bienvenid@s, este es nuestro menú!</h1>
   <Box sx={{display:'flex', justifyContent:'center',alignItems:'center'}}>
    <Typography>Sabores Venezolanos</Typography>
   </Box>

   <MenuItems />
   </Container>
   </Container>
   </>
  )
}
