import Nav from "./Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}]) 
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
    setCart(cart.filter(book => book.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }

  useEffect(() => {

  },[cart])

  return (
    <BrowserRouter>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Switch> {/* Wrap your routes with the Switch component */}
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} /> {/* Added 'exact' here */}
          <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" render={() => 
          <Cart 
          books={books} 
          cart={cart} 
          changeQuantity={changeQuantity} 
          removeItem={removeItem}/>} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;