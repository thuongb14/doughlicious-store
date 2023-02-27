import { List, ListItemButton, ListItemText, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const pathname = window.location.pathname
  // const [selectedIndex, setSelectedIndex] = useState(0);

  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };

  return (
    <div>
      <Heading>All Products</Heading>
      <Divider />
      <List>
        <ListItemButton
          component={Link}
          to="/shop/doughnuts"
          selected={pathname.includes("doughnuts")}
          // onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="Doughnuts" />
        </ListItemButton>
        <ListItemButton
          selected={pathname.includes("cookies")}
          // onClick={(event) => handleListItemClick(event, 1)}
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
