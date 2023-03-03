import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function OrderPlaced(props) {
  return (
    <Wrap>
      <Banner></Banner>
      <TextArea>
        <Typography
          style={{
            padding: "1rem",
            fontFamily: "'Damion', cursive",
            color: "pink",
            fontSize: "50px",
          }}
          component="h2"
        >
          Your order has been placed! Thank you
        </Typography>
        <p style={{ padding: "0 7rem" }}>
          Hey! This is just a project made for educational purpose. While we
          know everybody loves doughnuts, we are not selling it. Website is
          inspired by BistroMorgan doughnuts shop, you might want to check it
          out for your doughnuts craving.
        </p>
      </TextArea>
      <Button component={Link} onClick={()=>props.removeAllFromCart()} to="/shop/doughnuts">
        Back to Shop
      </Button>
    </Wrap>
  );
}

const Wrap = styled("div")({
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
});

const Banner = styled("div")({
  width: "100vw",
  height: "200px",
  backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/599a50289f745608b1724fb1/1635054180009-WVJGBPYV7VV8KERX6KFN/morgan_e-commerce+generalbanner.jpg?format=1500w")`,
});

const TextArea = styled("div")({});
