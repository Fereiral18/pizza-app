import {
  Box,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

export const MenuItems = () => {
 
  const entradas = [
    {
      name: "Tequeños (8 unidades)",
      varios: [{
        name: 'Queso',
        precio: 10000
      },
      {
        name:'Jamon y queso',
        precio: 10500
      },
      {

        name: 'Panceta y queso',
        precio: 11000
      }
      ],
     
    },
    {
      name: "Tostones (6 unidades)",
      varios: [{
        name: 'Ensalada y queso',
        precio: 8500
      },
      {
        name:'Carne y queso',
        precio: 10000
      },
      {

        name: 'Mixtos',
        precio: 9500
      }
      ],
    
    },
    {
      name: "Cesta de Plátano (5 unidades)",
      varios: [{
        name: 'Carne, pollo, ensalada de gallina, cazón (pescado), poroto queso.',
        precio: 9000
      },
      
      ],
     
    },
    {
      name: "Cochino frito (cerdo)",
      varios: [{
        name: "Ensalada coleslaw (repollo blanco, morado y zanahoria) y arepas fritas",
        precio: 10000
      }],
     
    },
  ];

  const patacones = [
    {
      name: "patacones sencillos",
      rellenos: "pollo, carne, pernil",
      precio: "4$",
      img: "",
    },
    {
      name: "Patacon vegetariano",
      rellenos: "Lechuga, Tomate, Poroto, Palta, Platano, Queso",
      precio: "5$",
    },
    {
      name: "Ingredientes Adicionales",
      precio: "1$",
      types: "cebolla, pimenton, tocineta, extra queso, peperoni",
    },
  ];

  const arepas = [
    {
      name: "2 rellenos",
      precio: 9000
    },
    {
      name: "3 rellenos",
      precio: 10000
    },
     {
      name: "4 rellenos",
      precio: 10500
    }, {
      name: "arepa de pabellon",
      precio: 11000
    },
    {
      name: "arepa copada",
      precio: "10000",
      img: "https://ohhpizza.com/wp-content/uploads/pizza_jamonyqueso_sinlactosa_730x470.jpg",
    },
    {
      name: "arepa reina pepiada",
      precio: "10500",
    },
    {
      name: "arepa de pernil",
      precio: "10000",
    },
    {
      name: "Extra",
      precio: "1000",
      types: "Palta",
    },
  ];
  const empanadas = [
    {
      name: "1 rellenos",
      precio: 7500,
    },
    {
      name: "2 rellenos",
      precio: 8500,
    },
    {
      name: "3 rellenos",
      precio: 9500,
    },
    {
      name: "4 rellenos",
      precio: 10500,
    },
    {
      name: "Cordón Blue (pollo, Queso, Jamón)",
      precio: 9500,
    },
    {
      name: "Pabellón (carne, queso, poroto, plátano)",
      precio: 11000,
    },
    {
      name: "Pabellón Margariteño (cazon, queso, poroto, plátano)",
      precio: 11000,
    },
    {
      name: "Poderosa (carne, pollo, pernil, chorizo,queso, jamón, plátano)",
      precio: "12000",
    },
  ];
  const especiales = [
    {
      name: "Costillas guisadas",
      ingredientes: "Arroz y Ensalada / Espaguetis y plátano",
      precio: 12000,
    },
    {
      name: "Asado negro",
      ingredientes: "Arroz y Ensalada / Espaguetis y plátano ",
      precio: 12000,
    },
    {
      name: "Pabellon criollo",
      ingredientes: "Arroz, plátano carne, desmechada, porotos negro",
      precio: 12000,
    },
    {
      name: "Pollo Broaster",
      ingredientes: "Con papas o arepitas fritas y ensalada coleslaw",
      precio: 11000,
    },
    {
      name: "Pepitos Mixto (carne, pollo)",
      precio: 12000,
    },
    {
      name: "Pepito Full (Carne, pollo, chori",
      precio: 13500,
    },
    {
      name: "Gratinado Especial (carnes de la casa (carne, pollo o pernil) con queso fundido, pepinillos agridulces y reducción Malbec)",
      precio: 10000,
    },
  ];
  const cachapas = [
    {
      name: "Queso",
      precio: 9500,
    },
    {
      name: "Carne y queso",
      precio: 10000,
    },
    {
      name: "Cochino frito",
      precio: 10500,
    },
    {
      name: "Bomba (Carne, pollo, queso, jamón)",
      precio: 11000,
    },
    {
      name: "Chuchunai (carne, queso, palta, plátano)",
      precio: 11000,
    },
  ];

  return (
    <>
      <Stack sx={{ width: "100%" }}>
        <Card
          sx={{
            margin: "auto",
            mt: 4,
            width: "100%",
            boxShadow: "8px 8px 20px black",
            backgroundColor:"transparent",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              gap: "100px",
              justifyContent: "center",
              textAlign: "center",
              flexWrap: "wrap",
            }}
          >
            <Stack sx={{
              display: "flex",
              justifyContent:"center",
              alignItems:"center",
              flexDirection:"column"
            }}>
              <Typography variant="h5" color="white" sx={{display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"start", fontSize: 35, fontFamily:"monospace"}} gutterBottom>
                <Box>

                Entradas
                </Box>
                <Box sx={{
                  backgroundColor:"goldenrod",
                  width:"90px",
                  height:2
                }}></Box>
              </Typography>
              <Container
                sx={{
                 
                  borderRadius: "20px",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  flexDirection:"column",
                  width:"100%",
                  height:"800px"
                 
                  
                }}
              >
                {entradas.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent:"center",
                      alignItems:"center",
                      flexDirection:"column",
                      width:"90%",
                     
                    }}
                  >
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="white"
                        
                        >
                        {item.name}
                      </Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        color="white"
                        width={300}
                        >
                        {item.varios?.map((item)=>(
                          <>
                    <Box sx={{
                          
                            mb:"10px",
                          
                      
                      width: "100%",
                      height: 30
                    }}>
                           <Typography
                        component="span"
                        variant="body2"
                        color="white"
                        >
                        {item.name}
                      </Typography>
                        </Box>
                        <Box sx={{  
                          
                          
                      width: "100%",
                      height: 40}}>

                          <Typography
                        component="span"
                        display="block"
                        color="white"
                        sx={{
                          color: "yellow",
                        }}
                        >
                        $ {item.precio}
                      </Typography>
                        </Box>
                          </>
                        ))}
                      </Typography>
                     
                    </>
                  </Box>
                ))}
              </Container>
              <Typography variant="h5" color="white" sx={{
                
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"start", fontSize: 35, fontFamily:"monospace"
              }}gutterBottom>
                <Box>Arepas</Box>
                <Box sx={{
                  backgroundColor:"goldenrod",
                  width:"90px",
                  height:2
                }}></Box>
                
              </Typography>
              <Container
                sx={{
                  
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems:"center",
                  flexDirection: "column",
                  
                }}
              >
                <Typography sx={{color:"yellow", width: '60%', mt: '20px', }}>Rellenos: Carne, Pollo, Platano, Queso, Jamon, Cebolla, Chorizo, Caraota (Porotos), Cazon (Pescado), Lechuga, Tomate, Ensalada de gallina</Typography>
                {arepas.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      
                    }}
                  >
                    <>
                      <Typography>
                        <img src={''} alt="" className="pizza-img" />
                      </Typography>

                      <Typography
                        component="span"
                        variant="body2"
                        color="white"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        color="yellow"
                      >
                        {item.types}
                      </Typography>
                      <Typography
                        component="span"
                        display="block"
                        color="white"
                        fontSize={18}
                        fontWeight={800}
                        sx={{
                         m: "10px"
                        }}
                      >
                        $ {item.precio}
                      </Typography>
                    </>
                  </Box>
                ))}
              </Container>
            </Stack>
            <Stack>
              <Typography variant="h5" gutterBottom sx={{ display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"start", fontSize: 35, fontFamily:"monospace",
                color:"white"}}>
                  <Box>
                Patacones

                  </Box>
                  <Box sx={{  backgroundColor:"goldenrod",
                  width:"90px",
                  height:2}}></Box>
              </Typography>

              <Container
                sx={{ borderRadius: "20px" }}
              >
                {patacones.map((patacones, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {patacones.name}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {patacones.rellenos}
                    </Typography>
                    <Typography
                      component="span"
                      display="block"
                      color="primary"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      Precio: {patacones.precio}
                    </Typography>
                  </Box>
                ))}
              </Container>
            </Stack>
            <List>
              <Typography variant="h5" gutterBottom sx={{display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"start", fontSize: 35, fontFamily:"monospace",
                color:"white"}}>
                <Box>
                Empanadas

                </Box>
                <Box sx={{
                    backgroundColor:"goldenrod",
                    width:"90px",
                    height:2
                }}></Box>
              </Typography>
              <Container
                sx={{  borderRadius: "20px" }}
              >
                {empanadas.map((item, index) => (
                  <Box key={index}>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.name}
                    </Typography>

                    <Typography
                      component="span"
                      display="block"
                      color="primary"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      Precio: {item.precio}
                    </Typography>
                  </Box>
                ))}
              </Container>
            </List>
            <List>
              <Typography variant="h5" sx={{display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"start", fontSize: 35, fontFamily:"monospace",
                color:"white"}} gutterBottom>
                  <Box>
                Menu especial

                  </Box>
                  <Box sx={{backgroundColor:"goldenrod",
                    width:"90px",
                    height:2}}></Box>
              </Typography>
              <Container
                sx={{  borderRadius: "20px" }}
              >
                {especiales?.map((especiales, index) => (
                  <Box key={index}>
                    <Typography
                      component="span"
                      variant="body2"
                      color="white"
                    >
                      {especiales.name}
                    </Typography>

                    <Typography
                      component="span"
                      display="block"
                      color="primary"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        color: 'white'
                      }}
                    >
                      $ {especiales.precio}
                    </Typography>
                  </Box>
                ))}
                <List>
                <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      cachapas
                    </Typography>
                  <Container
                    sx={{borderRadius: "20px" }}
                  >
                    {cachapas.map((item, index) => (
                      <Box key={index}>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            color:"white"
                          }}
                        >
                          {item.name}
                        </Typography>

                        <Typography
                          component="span"
                          display="block"
                          color="primary"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          Precio: {item.precio}
                        </Typography>
                      </Box>
                    ))}
                  </Container>
                </List>
              </Container>
            </List>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
};
