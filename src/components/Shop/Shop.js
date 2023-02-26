import Nav from "../Homepage/Nav";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Items from "./Items";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";

export default function Shop(props) {
  const location = useLocation();

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
      <Cart total={props.total}
      removeFromCart={props.removeFromCart}
        cart={props.cart}
        cartDrawer={props.cartDrawer}
        showCart={props.showCart}
      />
      <Footer/>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
