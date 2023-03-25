import "./App.css";
import Home from "./components/Homepage/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import { useState, useEffect } from "react";
import CheckOut from "./components/CheckOut/CheckOut";
import SignUp from "./components/Authentication/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [cartCount, setCartCount] = useState(
    Number(localStorage.getItem("cartCount")) || 0
  );
  const [cartDrawer, setCartDrawer] = useState(false);
  const [total, setTotal] = useState(0);
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("cartCount", cartCount);

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
    if (cartFiltered.length === 0) {
      localStorage.removeItem("cart");
      localStorage.removeItem("cartCount");
    } else {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      localStorage.setItem("cartCount", cartCount - item.quantity);
    }
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

  const removeAllFromCart = () => {
    setCart([]);
    setCartCount(0);
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("cartCount", 0);
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
      element: (
        <CheckOut
          removeAllFromCart={removeAllFromCart}
          total={total}
          cart={cart}
        />
      ),
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ], {basename: "/"});
  return (
    <div className="App">

        <Routes>
          <Route
            path="/doughlicious-store"
            element={
              <Home
                handleNumberChange={handleNumberChange}
                total={total}
                removeFromCart={removeFromCart}
                cart={cart}
                cartCount={cartCount}
                showCart={showCart}
                cartDrawer={cartDrawer}
              />
            }
          />
          <Route
            path="/shop/doughnuts"
            element={
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
            }
          />
          <Route
            path="/shop/cookies"
            element={
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
            }
          />
          <Route
            path="/checkout"
            element={
              <CheckOut
                removeAllFromCart={removeAllFromCart}
                total={total}
                cart={cart}
              />
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    </div>
  );

}

export default App;
