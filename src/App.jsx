import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/aslampa17" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
