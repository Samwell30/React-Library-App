import "./index.css";
import Nav from "./Nav";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Home />
        <Route path="/" exact component={Home} />
        <Route path="/books" render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} />} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
