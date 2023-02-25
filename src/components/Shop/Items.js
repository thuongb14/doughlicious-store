import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Button } from "@mui/material";
import { products } from "../Data/Products";
import { useState } from "react";

const Item = styled("div")({
  padding: "1rem",
  textAlign: "center",
});

export default function Items(props) {
  const allProducts = products.products;
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setCartCount(cartCount + 1);
  };

  return (
    <Container>
      <h2 style={heading}>Doughnuts</h2>
      <p>Check out our doughlicious donut range.</p>
      <p>Made fresh everyday and doesn't hurt your pocket</p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {allProducts.map((donut, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <img style={donutImg} src={donut.img} alt="" />
                <p>
                  <strong>{donut.name}</strong>
                </p>
                <p>
                  <strong>${donut.price}</strong>
                </p>
                <CustomButton onClick={addToCart(donut)}>
                  Add to Cart
                </CustomButton>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

const donutImg = {
  width: "80%",
  height: "auto",
};

const CustomButton = styled(Button)({
  width: "80%",
  backgroundColor: "black",
  color: "white",
});

const heading = {
  fontFamily: "'Damion', cursive",
  color: "#ffbe57",
  fontSize: "50px",
  margin: "0",
};

const Container = styled("div")({
  margin: "0 auto",
  width: "90%",
  marginTop: "5rem",
  fontFamily: "Montserrat",
  padding: "1rem",
});
