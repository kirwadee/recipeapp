import { Box, Stack, styled, Typography } from '@mui/material'
import drinks from "../../static/drinks.jpg"
import breakfast from "../../static/breakfast.jpg"
import desserts from "../../static/fruits.jpeg"
import lunch from "../../static/meat.jpg"
import salad from "../../static/salad.jpg"
import veges from "../../static/veges.jpg"
import dinner from "../../static/dinner.jpg"
import appetizer from "../../static/appetizer.jpg"

const StyledCard = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    borderRadius:'100%',
    width:'100px',
    [theme.breakpoints.up('md')]:{
        height:100
    },
    [theme.breakpoints.down('md')]:{
        height:100
    },
    position:'relative',
    cursor:'pointer',
    '&:hover':{
        opacity:0.8,
        boxSizing:'borderBox',
        zIndex:1,
        transition:`all 0.5s ease`
    }
}));

const StyledTypography = styled(Typography)({
    fontSize:'20px',
    color:'black',

})

const CardWrapper = styled(Box)(()=>({
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
}))

const Category = () => {
  return (
    <Stack Container direction={'row'} my={4} spacing={4} ml={3} sx={{overflow:'auto'}}>
        <CardWrapper>
        <StyledCard sx={{backgroundImage:`url(${breakfast})`}} />
        <StyledTypography>Breakfast</StyledTypography>
        </CardWrapper>
        <CardWrapper>
        <StyledCard sx={{backgroundImage:`url(${drinks})`}} />
        <StyledTypography>Drinks</StyledTypography>
        </CardWrapper>
        <CardWrapper>
        <StyledCard sx={{backgroundImage:`url(${appetizer})`}} />
        <StyledTypography>Appetizer</StyledTypography>
        </CardWrapper>
        <CardWrapper>
        <StyledCard sx={{backgroundImage:`url(${desserts})`}} />
        <StyledTypography>Desserts</StyledTypography>
        </CardWrapper>
        <CardWrapper>
        <StyledCard sx={{backgroundImage:`url(${lunch})`}} />
        <StyledTypography>Lunch</StyledTypography>
        </CardWrapper>
        <CardWrapper>
        <StyledCard sx={{backgroundImage:`url(${salad})`}} />
        <StyledTypography>Salad</StyledTypography>
        </CardWrapper>
        <CardWrapper>
        <StyledCard sx={{backgroundImage:`url(${veges})`}} />
        <StyledTypography>Veges</StyledTypography>
        </CardWrapper>
        <CardWrapper>
        <StyledCard sx={{backgroundImage:`url(${dinner})`}} />
        <StyledTypography>Dinner</StyledTypography>
        </CardWrapper>
       
    </Stack>
  )
}

export default Category