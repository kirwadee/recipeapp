import { Send } from '@mui/icons-material'
import { Box, Button, Card, CardMedia, TextField, Typography } from '@mui/material'
import pizza from '../../static/pizza.jpg'

const Rightbar = () => {
  return (
    <Box padding={2}>
        <Typography variant='h6' align='center' mt={5}>
            Anne Kirwa
        </Typography>
        <CardMedia 
           component={'img'}
           height='300'
           image={pizza}
           alt='pizza image'
           sx={{
            width:'350px',
            cursor:'pointer',
            '&:hover':{
              opacity:0.8,
              boxSizing:'border-box',
              zIndex:1,
              transition:`all 0.5s ease`
            }
           }}
        />
        <Typography align='left' paragraph>
            I love to sing and cook.My best time I spent is in the kitchen
        </Typography>
        <Typography align='left' paragraph>
            Don't forget to subscribe to eatingwell <br /><a href='google.com'>Read More</a>
        </Typography>
        <Card sx={{height:'200px', marginTop:2}}>
            <Typography align='center' variant='body1'>
                Ads Here
            </Typography>
        </Card>
        <Typography align='center' mt={2} bgcolor='tomato'padding={1} color='white'>
            Join Our NewsLetter
        </Typography>
        <Box sx={{pl:2}}>
            <TextField
              label='Enter Your Email!'
              variant='standard'
              color='warning'
              fullWidth
              sx={{display:'flex', mb:2}}
             />
            <Button endIcon={<Send />} variant='contained' sx={{bgcolor:'tomato','&:hover':{bgcolor:'tomato'}}}>
                Send
            </Button>
        </Box>
    </Box>
  )
}

export default Rightbar