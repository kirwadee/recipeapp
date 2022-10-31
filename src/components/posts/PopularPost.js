import { Box, Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material'
import pizza from '../../static/pizza.jpg'

const PopularPost = () => {
  return (
    <Box>
     <Link sx={{textDecoration:'none'}}>
      <Card >
          <CardMedia 
           component={'img'}
           height='300'
           image={pizza}
           alt='pizza image'
           sx={{
            cursor:'pointer',
            '&:hover':{
              opacity:0.8,
              boxSizing:'border-box',
              zIndex:1,
              transition:`all 0.5s ease`
            }
           }}
          />
          <CardContent sx={{position:'relative'}}>
            <Typography gutterBottom variant='h6' align='center'>
              Yummy Pizza
            </Typography>
            <Typography paragraph >
              Pizza is one of the best and delicious food snack to have.It is consumed by all world population 
              and it is highly esteemed as the leader in the delicacies.With technilogy at reach we can take you 
              step by step to make your preferred pizza at the comfort of your home.
            </Typography>
            <CardActions
             sx={{position:'absolute', bottom:0, right:0}}
            >
              <Button sx={{color:'tomato', '&.MuiButton-root':{textTransform:'lowercase'}}} size='large'>
                Share
              </Button>
              <Button sx={{color:'tomato', '&.MuiButton-root':{textTransform:'lowercase'}}} size='large'>
                Learn More
              </Button>
            </CardActions>
          </CardContent>
      </Card>
     </Link>
    </Box>
  )
}

export default PopularPost