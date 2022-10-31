import { Box, Container, Grid, styled, Typography } from '@mui/material'
import pizza from "../../static/pizza.jpg"
import lunch from "../../static/meat.jpg"
import salad from "../../static/salad.jpg"
import veges from "../../static/veges.jpg"
import Category from '../categoriesList/Category'

const StyledCard = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    borderRadius:'10px',
    [theme.breakpoints.up('md')]:{
        height:300
    },
    [theme.breakpoints.down('md')]:{
        height:200
    },
    position:'relative',
    cursor:'pointer',
    '&:hover':{
        opacity:0.8,
        boxSizing:'borderBox',
        zIndex:1,
        transition:`all 0.5s ease`
    }
}))

const StyledWrapper = styled(Box)({
    position:'absolute',
    bottom:'-15px',
    width:'80%'
})
const StyledTypography = styled(Typography)({
    fontSize:'20px',
    background:'tomato',
    color:'white',
    textAlign:'center'
})

const Hero = () => {
  return (
    <Container>
        <Category />
        <Grid container direction={'row'} columnSpacing={2} rowSpacing={3} >
            <Grid item md={3} sm={6} xs={12} >
                <StyledCard
                 sx={{backgroundImage:`url(${pizza})`}}
                >
                    <StyledWrapper>
                        <StyledTypography>Pizza</StyledTypography>
                    </StyledWrapper>
                </StyledCard>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <StyledCard
                 sx={{backgroundImage:`url(${lunch})`}}
                >
                      <StyledWrapper>
                        <StyledTypography>Meat</StyledTypography>
                    </StyledWrapper>
                </StyledCard>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <StyledCard
                 sx={{backgroundImage:`url(${salad})`}}
                >
                      <StyledWrapper>
                        <StyledTypography>Salad</StyledTypography>
                    </StyledWrapper>
                </StyledCard>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <StyledCard
                 sx={{backgroundImage:`url(${veges})`}}
                >
                      <StyledWrapper>
                        <StyledTypography>Vegetables</StyledTypography>
                    </StyledWrapper>
                </StyledCard>
            </Grid>
        </Grid>
        
    </Container>
  )
}

export default Hero