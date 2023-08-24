import './App.css'
import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from './pages/ProductPage';
import Cart from "./pages/Cart" ;
import ProductDetail from "./pages/ProductDetail";


function App() {
  const [cart, setCart] = useState([])

  const updateCart = (product ) => {

    const newCart = [...cart, product]

    setCart(newCart)
};

  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="/" element={<ProductPage updateCart={updateCart}/>} />

        <Route
          path="/products/:id"
          element={<ProductDetail updateCart={updateCart}/>}
        />

        <Route
            path="/cart"
            element={<Cart cart={cart}/>}
        />

        <Route path="*" element />
      </Routes>
      <Footer />
    </div>
  )
}

export default App