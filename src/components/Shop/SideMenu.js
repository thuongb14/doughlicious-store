import { List, ListItemButton, ListItemText, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useState } from "react";

const SideMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <Heading>All Products</Heading>
      <Divider />
      <List>
        <ListItemButton
          component={Link}
          to="/shop/doughnuts"
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="Doughnuts" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          component={Link}
          to="/shop/cookies"
        >
          <ListItemText primary="Cookies" />
        </ListItemButton>
      </List>
    </div>
  );
};

const Heading = styled("h2")({
  fontSize: "30px",
});

export default SideMenu;
