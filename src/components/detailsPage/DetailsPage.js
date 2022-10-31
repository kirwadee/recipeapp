import {
  Box,
  CardMedia,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Category from "../categoriesList/Category";
import pizza from "../../static/pizza.jpg";
import { DoubleArrow } from "@mui/icons-material";

const DetailsPage = () => {
  return (
    <Container>
      <Category />
      <Typography variant="h6" align="center" my={4} fontWeight={"bold"}>
        Title of the Recipe
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{
            width: "100%",
            height: { xs: "300px", md: "400px" },
          }}
          component={"img"}
          image={pizza}
          alt="pizza"
        />
        <Typography
          variant="subtitle1"
          align="center"
          mt={4}
          fontWeight={"bold"}
        >
          Ingredients
        </Typography>
        <List
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <ListItemButton>
            <ListItemIcon>
              <DoubleArrow />
            </ListItemIcon>
            <ListItemText primary="meat" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DoubleArrow />
            </ListItemIcon>
            <ListItemText primary="eggs" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DoubleArrow />
            </ListItemIcon>
            <ListItemText primary="wheat flour" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DoubleArrow />
            </ListItemIcon>
            <ListItemText primary="salt" />
          </ListItemButton>
        </List>
        <Typography variant="body1" align="justify" m={2}>
          Pizza is one of the best and delicious food snack to have.It is
          consumed by all world population and it is highly esteemed as the
          leader in the delicacies.With technilogy at reach we can take you step
          by step to make your preferred pizza at the comfort of your home.
          Pizza is one of the best and delicious food snack to have.It is
          consumed by all world population and it is highly esteemed as the
          leader in the delicacies.With technilogy at reach we can take you step
          by step to make your preferred pizza at the comfort of your home.
        </Typography>
      </Box>
    </Container>
  );
};

export default DetailsPage;
