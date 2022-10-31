import { Box, Container, Stack } from '@mui/material'
import Hero from '../hero/Hero'
import Populars from '../posts/Populars'
import Posts from '../posts/Posts'
import Rightbar from '../rightbar/Rightbar'

const Main = () => {
  return (
    <>
    <Hero />
    <Container>
    <Stack direction={'row'} mt={2} spacing={1}>
        <Box flex={3}>
            <Posts />
        </Box>
        <Box flex={1} sx={{display:{xs:'none', md:'block'}}}>
            <Rightbar />
        </Box>
    </Stack>
    <Populars />
    </Container>
    </>
  )
}

export default Main