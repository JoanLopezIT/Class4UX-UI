import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

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
    </div>
  )
}

export default App
