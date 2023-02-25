import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export default function Nav(props) {
  const { pathname } = props;

  return (
    <Navbar pathname={pathname}>
      <Title>DOUGHLICIOUS</Title>
      <CustomNavLink to="/" pathname={pathname}>
        HOME
      </CustomNavLink>
      <CustomNavLink to="/shop" pathname={pathname}>
        SHOP
      </CustomNavLink>
      <CustomNavLink to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span> ({props.cartCount})</span>
      </CustomNavLink>
    </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  align-items: center;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  background-color: ${({ pathname }) =>
    pathname === "/shop" ? "pink" : "rgb(255, 255, 255, 0.3)"};
  padding: 1rem 3rem;
`;

const CustomNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  transition: 0.5s;

  &:hover {
    text-decoration: underline;
    zoom: 110%;
    letter-spacing: 6px;
  }
  &:active {
    color: pink;
  }
`;

const Title = styled.div`
  color: white;
  font-size: 40px;
  font-family: "Titan One", cursive;
`;
