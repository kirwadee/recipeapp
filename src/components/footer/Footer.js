import { Box, Container, Stack, styled, Typography } from '@mui/material'


const MenuBox = styled(Box)(({theme})=>({
    display:'flex',
    gap:30,
    [theme.breakpoints.down('md')]:{
        gap:5,
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
    },
    cursor:'pointer'
}))

const MenuItems = [
    {Name:'Home', Link:'#'},
    {Name:'Recipes', Link:'#'},
    {Name:'About Us', Link:'#'},
    {Name:'Subscribe', Link:'#'},
]


const Footer = () => {
  return (
    <Box
     sx={{
        bgcolor:'tomato',
        height:'100px'
     }}
    >
        <Container>
            <Stack direction={{xs:'column', md:'row'}}>
            <MenuBox flex={2}  color='white'>
                { MenuItems.map((item) => (
                        <Typography variant='body2' mt={2}>
                            {item.Name}
                        </Typography>
                    ))
                }
            </MenuBox>
            <Box flex={1} color='white' mt={2}>
               <Typography variant='body2' align='center'> delitreatsrecipes.com</Typography>
            </Box>
            </Stack>
            <Typography color='white' align='center' my={3}>
                Learn the art of preparing and cooking great meals!
            </Typography>
        </Container>
    </Box>
  )
}

export default Footer