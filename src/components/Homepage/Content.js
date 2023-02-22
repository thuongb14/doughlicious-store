import styled from "styled-components";

export default function Content() {
    return (
      <Wrapper>
        <h1>
          Incredoughbly <span style={{ color: "pink" }}>good!</span>
        </h1>
        <p>Made fresh daily. Just a mouthful of goodness.</p>
<Button>Visit the Shop</Button>      </Wrapper>
    );
}


const Wrapper = styled.div`
color: white;
text-align: left;
  position: absolute;
  width: 30vw;
  bottom: 20%;
  left: 5rem;
  z-index: 1;
  font-family: "Montserrat", sans-serif;
`;

const Button = styled.div`
padding: 1rem 3rem;
background-color: pink;
width: fit-content;
border-radius: 10%;
`