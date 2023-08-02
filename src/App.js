import "./styles/App.css"
import "../src/styles/Header.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"                       
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ProductId from "./components/ProductId";
import Product from "./components/Product";
// import Footer from "./components/Footer";
// import Practice from "../../first/src/components/Practice";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Practice name="kartik" lname="mane" /> */}
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id" element={<h1>hey</h1>}/>
          <Route path="*" element={<h1>jjjjjjjj</h1>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
