import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route  path="/" element={ <HomePage /> } /> */}

        <Route path="/" element />
        <Route path="/about" element />

        <Route
          path="/projects"
          element
        />

        <Route
          path="/products/:id"
          element
        />



        <Route path="*" element />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
