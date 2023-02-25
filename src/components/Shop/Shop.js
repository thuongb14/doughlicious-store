import Nav from "../Homepage/Nav";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Items from "./Items";

export default function Shop(props) {
    const location = useLocation();

  return (
    <Container>
      <Nav pathname={location.pathname} cartCount={props.cartCount}/>
      <Items/>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
`;
