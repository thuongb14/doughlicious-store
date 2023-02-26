import "./App.css";
import Home from "./components/Homepage/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartDrawer, setCartDrawer] = useState(false);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex === -1) {
      //not in cart, add
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      const updatedCart = [...cart]; //in cart, add quantity
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    }
    setCartCount(cartCount + 1);
    setTotal(total + item.price);
  };

  const removeFromCart = (item) => {
    const cartFiltered = cart.filter((cartItem) => cartItem.id !== item.id);
    const updatedCart = [...cartFiltered];
    setCart(updatedCart);
    setCartCount(cartCount - item.quantity);
    const reductedPrice = item.price * item.quantity;
    setTotal(total - reductedPrice);
  };

  const showCart = () => {
    setCartDrawer((cartDrawer) => !cartDrawer);
  };
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          total={total}
          removeFromCart={removeFromCart}
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
          total={total}
          removeFromCart={removeFromCart}
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
          total={total}
          removeFromCart={removeFromCart}
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
