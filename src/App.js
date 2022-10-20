// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"; 
import About from "./components/about"; 
import Gallery from "./components/Gallery"; 
import Weather from "./components/weathere"; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/weathere" >weathere</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={ <Home />} />
          
          {/* </Route> */}
          <Route path="/about" element={<About />} />
          
          {/* </Route> */}
          <Route path="/Gallery" element={<Gallery />} />
          
          {/* </Route> */}
          <Route path="/weathere" element={<Weather />} />
          
          {/* </Route> */}
         
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
