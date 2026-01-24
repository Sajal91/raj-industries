import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import ProductsPage from './ProductsPage'
import Contact from './Contact'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
