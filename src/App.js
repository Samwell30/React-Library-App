import Nav from "./Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        return item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item;
      })
    );
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route
            path="/books/:id"
            render={() => (
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
