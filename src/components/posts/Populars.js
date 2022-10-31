import { Box, Grid, Pagination, Stack, Typography } from "@mui/material"
import PopularPost from "./PopularPost"


const Populars = () => {
  return (
    <Box>
      <Typography
       variant='h5'
       bgcolor={'black'}
       color='white'
       align='center'
       mt={4}
       mb={4}
       padding={0.5}
      >
        Most Popular Recipes
      </Typography>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={2}
        sx={{display:'flex', justifyContent:'center'}}
         >
        <Grid item xs={12} sm={6} md={3}>
            <PopularPost />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <PopularPost />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <PopularPost />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <PopularPost />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <PopularPost />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <PopularPost />
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

export default Populars