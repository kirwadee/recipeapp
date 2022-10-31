import { Box, Grid, Pagination, Stack, Typography } from '@mui/material'
import CardPost from './CardPost'

const Posts = () => {
  return (
    <Box>
      <Typography variant='h5' align='center' my={2}>
        Latest Recipes
      </Typography>
      <Grid container rowSpacing={{xs:0, sm:1, md:1}} direction={'column'}>
        <Grid item xs>
          <CardPost />
        </Grid>
        <Grid item xs>
          <CardPost />
        </Grid>
        <Grid item xs>
          <CardPost />
        </Grid>
        <Grid item xs>
         <CardPost />
        </Grid>
      </Grid>

      <Stack
       spacing={2}
       sx={{my:4,display:'flex', justifyContent:'center', alignItems:'center'}}
      >
        <Pagination count={10} color='warning' />
      </Stack> 
    </Box>
  )
}

export default Posts