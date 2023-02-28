import { Grid, Box, TextField, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function ReviewCart(props) {
  const cart = props.cart;
  console.log(cart);
  return (
    <div>
      {cart.map((item, index) => (
        <Grid style={{ padding: "1rem 2rem" }} container spacing={1}>
          <Grid item xs={6}>
            <Item>
              <img
                style={{ width: "70%", borderRadius: "8%" }}
                src={item.img}
                alt=""
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </Item>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Box component="form" onSubmit={(e) => e.preventDefault()}>
                  <TextField
                    type="text"
                    label="Quantity"
                    variant="outlined"
                    disabled
                    value={item.quantity}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <h3>
                  <strong>${item.totalItemPrice.toFixed(2)}</strong>
                </h3>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Divider style={{ margin: "2rem" }} />
      <h2>
        <strong>Subtotal: ${props.total}</strong>
      </h2>
      <Button component={Link} to="/shop/doughnuts">
        Continue to shop
      </Button>
    </div>
  );
}

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
