import './index.css';
import Nav from './Nav';
import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import Books from './pages/Books';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
 <Nav />
 <Home />
 <Route path='/' exact component={Home} />
 <Route path="/books" component={Books} />
 <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
