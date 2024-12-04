import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom"
import BookList from "./pages/BookList"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import FAQ from "./pages/FAQ"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/books" element={<BookList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App