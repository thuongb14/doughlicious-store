import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider, { dividerClasses } from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Modal from "@mui/material/Modal";
import Grid from "@mui/system/Unstable_Grid/Grid";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
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
            <h4>There's nothing in your cart</h4>
          ) : (
            <div>
              {cart.map((item, index) => (
                <List>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      <Item>
                        <img style={{ width: "80%" }} src={item.img} alt="" />
                      </Item>
                    </Grid>
                    <Grid item xs={7}>
                      <Item>
                        <h3>{item.name}</h3>
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
                          <DeleteIcon onClick={() => props.removeFromCart(item)} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </List>
              ))}
            </div>
          )}
          <Divider />
          <h2>Total: </h2>
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
