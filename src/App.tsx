import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BookList from "./pages/BookList"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import FAQ from "./pages/FAQ"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import BookPage from "./pages/BookPage"
import Cooperation from "./pages/Cooperation"
import Contract from "./pages/Contract"
import Bookstores from "./pages/Bookstores"
import BookClub from "./pages/BookClub"
import Partners from "./pages/Partners"
import Refund from "./pages/Refund"
import Delivery from "./pages/Delivery"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/contract" element={<Contract />} />
          <Route path="/bookstores" element={<Bookstores />} />
          <Route path="/bookclub" element={<BookClub />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/cooperation" element={<Cooperation />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App