import "./App.css";
import Home from "./components/Homepage/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import { useState, useEffect } from "react";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartDrawer, setCartDrawer] = useState(false);
  const [total, setTotal] = useState(0);

  const handleNumberChange = (e, item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    const newCount = cartCount - item.quantity + Number(e.target.value);
    const updatedCart = [...cart];
    updatedCart[existingItemIndex].quantity = Number(e.target.value);
    updatedCart[existingItemIndex].totalItemPrice =
      item.price * Number(e.target.value);
    setCart(updatedCart);
    setCartCount(newCount);
  };

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex === -1) {
      //not in cart, add
      setCart([...cart, { ...item, quantity: 1, totalItemPrice: item.price }]);
    } else {
      const updatedCart = [...cart]; //in cart, add quantity
      updatedCart[existingItemIndex].quantity += 1;
      updatedCart[existingItemIndex].totalItemPrice += item.price;
      setCart(updatedCart);
    }
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (item) => {
    const cartFiltered = cart.filter((cartItem) => cartItem.id !== item.id);
    const updatedCart = [...cartFiltered];
    setCart(updatedCart);
    setCartCount(cartCount - item.quantity);
  };

  const calculateTotal = () => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].totalItemPrice;
    }
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const showCart = () => {
    setCartDrawer((cartDrawer) => !cartDrawer);
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          handleNumberChange={handleNumberChange}
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
          handleNumberChange={handleNumberChange}
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
          handleNumberChange={handleNumberChange}
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
      path: "/checkout",
      element: <CheckOut total={total} cart={cart} />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
