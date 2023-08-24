import './App.css'
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from './pages/ProductPage';
import Cart from "./pages/Cart" ;
import ProductDetail from './pages/ProductDetail';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route  path="/" element={ <HomePage /> } /> */}

        <Route path="/" element={<ProductPage />} />

        <Route
          path="/products/:id"
          element={<ProductDetail />}
        />

        <Route
            path="/cart"
            element={<Cart />}
        />

        <Route path="*" element />
      </Routes>
      <Footer />
    </div>
  )
}

export default App