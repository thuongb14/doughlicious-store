import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Button } from "@mui/material";
import { products } from "../Data/Products";
import SideMenu from "./SideMenu";
import { useState } from "react";

export default function Items(props) {
  const path = window.location.pathname;
  const selected = path.substring(25);
  const selectedProduct = products[selected];
  const [addedItemIndex, setAddedItemIndex] = useState(null);
  console.log(selected)

  const handleAddToCart = (item, index) => {
    props.addToCart(item);
    setAddedItemIndex(index);
    setTimeout(() => {
      setAddedItemIndex(null);
    }, 700);
  };

  return (
    <Container>
      <Heading>{selected === "doughnuts" ? "Doughnuts" : "Cookies"}</Heading>
      <Description>
        {selected === "doughnuts"
          ? "Check out our large range of doughlicious donuts here"
          : "Our cookies are just as undeniably good "}
      </Description>
      <Description>
        Made fresh everyday and doesn't hurt your pocket
      </Description>
      <Box style={{ marginTop: "2rem" }} sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={2} md={2}>
            <SideMenu />
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {selectedProduct.map((item, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Item>
                    <Image src={item.img} alt="" />
                    <Name>{item.name}</Name>
                    <Price>${item.price}</Price>
                    <CustomButton onClick={() => handleAddToCart(item, index)}>
                      {addedItemIndex === index ? "Item added" : "Add to Cart"}
                    </CustomButton>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const CustomButton = styled(Button)({
  width: "80%",
  backgroundColor: "black",
  color: "white",
  marginTop: "1rem",
  "&:hover": {
    backgroundColor: "#ffbe57",
    color: "black",
  },
});

const Heading = styled("h2")({
  fontFamily: "'Damion', cursive",
  color: "#ffbe57",
  fontSize: "50px",
  margin: "0",
});

const Description = styled("p")({
  margin: "0.5rem 0",
  fontSize: "1rem",
});

const Name = styled("p")({
  margin: "0.5rem 0",
  fontWeight: "bold",
});

const Price = styled("p")({
  margin: "0.5rem 0",
  fontWeight: "bold",
  color: "grey",
});

const Image = styled("img")({
  width: "80%",
  height: "auto",
  margin: "0 auto",
  overflow: "hidden",
  transition: ".3s ease-in-out, transform .3s ease-in-out",
  "&:hover": {
    opacity: 0.8,
    transform: "scale(1.3)",
  },
});

const Container = styled("div")({
  margin: "0 auto",
  width: "90%",
  marginTop: "5rem",
  fontFamily: "Montserrat",
  padding: "1rem",
});

const Item = styled("div")({
  padding: "1rem",
  textAlign: "center",
});
