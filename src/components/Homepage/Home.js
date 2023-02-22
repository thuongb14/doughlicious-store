import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Nav from "./Nav";
import Content from "./Content";

export default function Home() {
  return (
    <Container>
      <Nav/>
      <Spline scene="https://prod.spline.design/3JeZz8PvzCNmXqsj/scene.splinecode" />
      <Content/>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;

  .spline {
    position: relative;
    margin: 0;
    top: 0;
    right: 0;
  }
`;
