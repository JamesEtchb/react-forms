import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import { Home } from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

const NotFound = () => {
  return (
    <>
      <img
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
        alt="404 page"
      />
    </>
  )
}

export default App
