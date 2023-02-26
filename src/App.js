import "./App.css";
import Home from "./components/Homepage/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartDrawer, setCartDrawer] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setCartCount(cartCount + 1);
    console.log(cart)
  };

  const showCart = () => {
    setCartDrawer((cartDrawer) => !cartDrawer);
  };
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          cart={cart}
          cartCount={cartCount}
          showCart={showCart}
          cartDrawer={cartDrawer}
        />
      ),
    },
    {
      path: "/shop/doughnuts",
      element: (
        <Shop
          cart={cart}
          cartCount={cartCount}
          cartDrawer={cartDrawer}
          addToCart={addToCart}
          showCart={showCart}
        />
      ),
    },
    {
      path: "/shop/cookies",
      element: (
        <Shop
          cart={cart}
          cartCount={cartCount}
          cartDrawer={cartDrawer}
          addToCart={addToCart}
          showCart={showCart}
        />
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
