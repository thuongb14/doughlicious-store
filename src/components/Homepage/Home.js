import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Nav from "./Nav";
import Text from "./Text";
import Cart from "../Cart/Cart";

export default function Home(props) {
  return (
    <Container>
      <Nav
        pathname={window.location.pathname}
        cartCount={props.cartCount}
        showCart={props.showCart}
        cartDrawer={props.cartDrawer}
      />
      <Spline scene="https://prod.spline.design/3JeZz8PvzCNmXqsj/scene.splinecode" />
      <Text />
      <Cart total={props.total} removeFromCart={props.removeFromCart} cart={props.cart} cartDrawer={props.cartDrawer} showCart={props.showCart} />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
`;
