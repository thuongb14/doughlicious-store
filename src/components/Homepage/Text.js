import styled from "styled-components";
import {Link} from "react-router-dom"
import { Button } from "@mui/material";

export default function Content() {
    return (
      <Wrapper>
        <h1>
          Incredoughbly <span style={{ color: "pink" }}>good!</span>
        </h1>
        <p>Made fresh daily. Just a mouthful of goodness</p>
        {/* <Link to="/shop" component={Button} className="shop-button" variant="contained">Visit the Shop</Link> */}

        {/* <Button to="/shop" component={Link} className="shop-button" variant="contained">Visit the Shop</Button> */}
      </Wrapper>
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

  .shop-button {
    background-color: white;
    color: #c65d71;
    padding: 10px 2rem;
    box-shadow: 15px 11px 56px -4px rgba(0, 0, 0, 0.54);
  }
  
`;
