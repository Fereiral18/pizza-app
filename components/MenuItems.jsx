import { Box, Card, CardContent, Container, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

export const MenuItems = () => {


let imagesPizzas =['https://tarasmulticulturaltable.com/wp-content/uploads/2017/04/New-York-Style-Pizza-5-of-5.jpg','https://www.dondeir.com/wp-content/uploads/2019/08/pizza-hut-cadenas-de-pizza-cdmx.jpg']
const pizzasNormales= [{
    name: 'Pizza pequeña Jamon y Queso',
    precio: '4$',
       img: 'https://ohhpizza.com/wp-content/uploads/pizza_jamonyqueso_sinlactosa_730x470.jpg'
},{
    name: 'Pizza mediana Jamon y Queso',
    precio: '5$'
},
{
   name: 'Ingredientes Adicionales',
   precio: '1$',
   types: 'cebolla, pimenton, tocineta, extra queso, peperoni',
}]

const pizzasFamiliares= [{
    name: 'Pizza Familiar jamon y queso',
    precio: '7$',
    img: 'https://ohhpizza.com/wp-content/uploads/pizza_jamonyqueso_sinlactosa_730x470.jpg'

},{
    name: '2 Familiares Jamon y Queso +  pepsi 1/5',
    precio: '12$',
       
},
{
   name: 'Ingredientes adicionales',
   precio: '1$',
   types: 'cebolla, pimenton, tocineta, extra queso, peperoni',
}]
const adicionales =[{
  name: 'Tequeños',
  precio:'1.5$',
  cantidad:'5'
},{name: 'Refresco',
  precio:'1.5$'
}]

  return (
    <>
    <Stack sx={{ width:'100%'}}>
   <Card sx={{  margin: 'auto', mt: 4, width:'100%', boxShadow:'8px 8px 20px black'}}>
      <CardContent sx={{display:'flex', gap:'100px', justifyContent:'center', textAlign:'center', backgroundColor:'#f0f0f0', borderRadius:'20px', flexWrap:'wrap'}}>
        <Stack>
        <Typography variant="h5" gutterBottom>
          Pizzas Familiares
        </Typography>
          {pizzasFamiliares.map((pizza, index) => (
            <Container key={index}  sx={{ backgroundColor:'white', borderRadius: '20px', display:'flex', justifyContent:'center', flexDirection:'column'}}>
              <Box
              sx={{display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'center'}}
               >
                  <>
                
                        <Typography>
                            
                    <img src={pizza.img} alt="" className='pizza-img'/>
                        </Typography>
                    
                      <Typography component="span" variant="body2" color="text.secondary">
                        {pizza.name}
                      </Typography>
                   
                    <Typography component="span" display="block" color="primary" sx={{display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'center'}}>
                      Precio: {pizza.precio}
                    </Typography>
                  </>
               </Box>
                
              
            </Container>
          ))}
        </Stack>
        <List>
        <Typography variant="h5" gutterBottom>
          Pizzas Normales
        </Typography>

          {pizzasNormales.map((pizza, index) => (

            <Container key={index} sx={{ backgroundColor:'white',  borderRadius: '20px'}}>
              <Box
              sx={{display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'center'}}
             >
                
    
                        <Typography>
                            
                    <img src={pizza.img} alt="" className='pizza-img2'/>
                        </Typography>
                    
                   
                      <Typography component="span" variant="body2" color="text.secondary" >
                        {pizza.name}
                      </Typography>
                   
                    <Typography component="span" display="block" color="primary" sx={{display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'center'}}>
                      Precio: {pizza.precio}
                    </Typography>
                  </Box>
          
                  <Box/>
            </Container>
                ))
                }
          
        </List>
        <List>
        <Typography variant="h5" gutterBottom>
          Adicionales
        </Typography>
          {adicionales.map((pizza, index) => (
            
            <Container key={index} sx={{ backgroundColor:'white', borderRadius: '20px'}}>
                  <Box>
          
                   
                      <Typography component="span" variant="body2" color="text.secondary" >
                        {pizza.name}
                      </Typography>
                  
                   {
                    !pizza.cantidad ? "" : <>
                    <Typography component="span" display="block" color="primary">
                    cantidad: {pizza.cantidad}
                  </Typography>
               
                  <Typography component="span" display="block" color="primary">
                    Precio: {pizza.precio}
                  </Typography>
                    </> 
                   }

                     
                  </Box>
                  
            </Container>
                  ))
            
                }
        </List>
             
          
      </CardContent>
    </Card>
   </Stack>
    </>
  )
}
