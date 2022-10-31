import { AppBar, Box, Drawer, Input, List, ListItem, ListItemButton, styled, TextField, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react';

const StyledToolBar = styled(Toolbar)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
});
const MenuBar = styled(Box)({
    display:'flex',
    gap:30,
    cursor:'pointer'
})

const Navbar = () => {
    const MenuItems = [
        {Name:'Home', Link:'#'},
        {Name:'Recipes', Link:'#'},
        {Name:'About Us', Link:'#'},
        {Name:'Subscribe', Link:'#'},
    ]

    const[openMenu, setOpenMenu] = useState(false)

  return (
    <>
    <AppBar color='default' elevation={0} position='sticky'>
        <StyledToolBar>
            <Box flex={{xs:25, md:1}}>
                <Typography 
                 variant='h4'
                 color={'tomato'}
                 sx={{fontFamily:'Cookie, cursive'}}
                 >
                    Delitreats
                </Typography>
            </Box>
            <MenuBar flex={1} sx={{display:{xs:'none', md:'flex'}}}>
                {
                    MenuItems.map((item) => (
                        <Typography variant='body2' fontWeight={'bold'}>
                            {item.Name}
                        </Typography>
                    ))
                }
            </MenuBar>
            <Box flex={1}>
                <Input 
                 placeholder='search here'
                 color='warning'
                 sx={{display:{xs:'none', md:'flex'}, border:'none'}}
                  />

                  <MenuIcon 
                   sx={{display:{xs:'flex', md:'none'}, cursor:'pointer'}}
                   onClick = {()=>setOpenMenu(!openMenu)}
                    />
            </Box>
        </StyledToolBar>

        <Drawer
         anchor='top'
         open = {openMenu} 
         onClose= {()=>setOpenMenu(!openMenu)} 
        >
            <List>
                <ListItem>
                    {MenuItems.map((item) => (
                        <ListItemButton>{item.Name}</ListItemButton>
                    ))}
                </ListItem>
            </List>
            <TextField
                 label='search here'
                 color='warning'
                 sx={{display:{xs:'flex', md:'none'}, border:'none', m:2}}
                  />
        </Drawer>

    </AppBar>

<Box
sx={{
   display:'flex',
   justifyContent:'center',
   flexDirection:{xs:'column', md:'row'},
   alignItems:'center',
   my:'10px',
}}
>
   <Typography variant='h5' mr={{xs:0, md:1}} align='center'  sx={{fontFamily:'Cookie, cursive'}}>
       Recipes Categories
   </Typography>
   <Typography
    variant='h5'
    sx={{fontFamily:'Cookie, cursive'}}
    align='center'
   >
     With Easy to follow Steps
   </Typography>
</Box>
</>
  )
}

export default Navbar