
import {  Container} from '@mui/material';
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
   <h1>¡Bienvenidos Menu de la Pizzeria!</h1>
   <Box sx={{display:'flex', justifyContent:'center',alignItems:'center'}}>
    <img src="https://cdn.pixabay.com/photo/2023/08/12/02/42/ai-generated-8184596_640.png" alt="" className='image-background'/>
   </Box>

   <MenuItems />
   </Container>
   </Container>
   </>
  )
}
