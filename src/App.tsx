import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BookList from "./pages/BookList"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import FAQ from "./pages/FAQ"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import BookPage from "./pages/BookPage"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App