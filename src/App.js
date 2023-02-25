import "./App.css";
import Home from "./components/Homepage/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  
  const addToCart = (item) => {
    setCart([...cart, item]);
    setCartCount(cartCount + 1);
  };
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home cartCount={cartCount} />,
    },
    {
      path: "/shop/doughnuts",
      element: <Shop cartCount={cartCount} addToCart={addToCart} />,
    },
    {
      path: "/shop/cookies",
      element: <Shop cartCount={cartCount} addToCart={addToCart} />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
