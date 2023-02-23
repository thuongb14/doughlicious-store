import Nav from "../Homepage/Nav";
import styled from "styled-components";

export default function Shop() {
  return (
    <Container>
        <Nav/>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
`;
