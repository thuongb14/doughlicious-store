import Nav from "../Homepage/Nav";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Items from "./Items";
import Cart from "../Cart/Cart";



export default function Shop(props) {
  const location = useLocation();
  const cartShow = props.cartDrawer;

  return (
    <Container>
      <Nav
        pathname={location.pathname}
        cartCount={props.cartCount}
        showCart={props.showCart}
        cartDrawer={props.cartDrawer}
      />
      <Items
        showCart={props.showCart}
        cartDrawer={props.cartDrawer}
        addToCart={props.addToCart}
      />
      <Cart
        cart={props.cart}
        cartDrawer={props.cartDrawer}
        showCart={props.showCart}
      />
    </Container>
  );
  console.log(cartShow)
}

const Container = styled.div`
  position: relative;
`;
