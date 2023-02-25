import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Nav from "./Nav";
import Text from "./Text";
import { useState } from "react";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <Container>
      <Nav cartCount={cartCount} pathname={window.location.pathname} />
      <Spline scene="https://prod.spline.design/3JeZz8PvzCNmXqsj/scene.splinecode" />
      <Text addToCart={addToCart} />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
`;
