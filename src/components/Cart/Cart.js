import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Modal from "@mui/material/Modal";
import Grid from "@mui/system/Unstable_Grid/Grid";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";

const drawerWidth = 500;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  fontFamily: "Montserrat",
}));

export default function Cart(props) {
  const theme = useTheme();
  const cart = props.cart;

  return (
    <Modal
      open={props.cartDrawer}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              padding: "1rem",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <DrawerHeader>
            <IconButton onClick={() => props.showCart()}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
            <h3>Your Cart</h3>
          </DrawerHeader>
          <Divider />
          {cart.length < 1 ? (
            <div style={{ textAlign: "center" }}>
              <img
                style={{ width: "50%", padding: "1rem" }}
                src="https://openailabsprodscus.blob.core.windows.net/private/user-xih24vYk37Iwb9eO0e0334w5/generations/generation-FkcOfx3FSyEFWaHduAW2kZle/image.webp?st=2023-02-26T06%3A29%3A51Z&se=2023-02-26T08%3A27%3A51Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-26T04%3A55%3A56Z&ske=2023-03-05T04%3A55%3A56Z&sks=b&skv=2021-08-06&sig=TCeYbdBi1m89YZOIRq3uulhjYIYd5PQPhwF%2BhKoARxE%3D"
                alt=""
              />
              <p>Let's add in!</p>
            </div>
          ) : (
            <div>
              {cart.map((item, index) => (
                <List>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      <Item>
                        <img style={{ width: "100%" }} src={item.img} alt="" />
                      </Item>
                    </Grid>
                    <Grid item xs={7}>
                      <Item>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                      </Item>
                      <Grid container spacing={2}>
                        <Grid item xs={8}>
                          <Box component="form">
                            <TextField
                              type="number"
                              id="outlined-basic"
                              label="Quantity"
                              variant="outlined"
                              value={item.quantity}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Icon onClick={() => props.removeFromCart(item)} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </List>
              ))}
            </div>
          )}
          <Divider />
          <h2>Total: ${props.total}</h2>
        </Drawer>
      </Box>
    </Modal>
  );
}

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Icon = styled(DeleteIcon)({
  "&:hover": {
    cursor: "pointer",
  },
});
