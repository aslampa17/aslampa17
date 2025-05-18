import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Project from "./Project"
import About from "./About"
import Contact from "./Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/aslampa17" element={<Home />} />
        <Route path="/aslampa17/projects" element={<Project />} />
        <Route path="/aslampa17/about" element={<About />} />
        <Route path="/aslampa17/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
