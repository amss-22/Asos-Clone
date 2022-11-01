import Navbar from "./components/navbar/navbar";
import Home from "./components/homepage/home"
import './App.css';
import Navdown from "./components/navbar2/navdown.jsx";
import Footer from "./components/footer/footer";
import Product from "./components/Product page/product";
import AllRoutes from "./components/routes/allRoutes";
import Cart from "./components/cart/cart";

function App() {
  return (
    <div className="body">
    <Navbar/>
    {/* <Navdown/> */}
    {/* <Home/> */}
    {/* <Product/> */}
    <AllRoutes/>
    <Footer/>
    
   </div>
  );
}

export default App;
