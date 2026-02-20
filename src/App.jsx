import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import ProductsPage from './ProductsPage'
import ProductDetailPage from './ProductDetailPage'
import PumpMagnet from './PumpMagnet'
import Contact from './Contact'
import NotFound from './NotFound'
import { useEffect, useState } from 'react'
import ProductModal from './ProductModal'

function App() {
  const location = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home setProduct={setProduct} setIsModalOpen={setIsModalOpen} />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/products' element={<ProductsPage setProduct={setProduct} setIsModalOpen={setIsModalOpen} />} /> */}
        <Route path='/products/:productSlug' element={<ProductDetailPage setProduct={setProduct} setIsModalOpen={setIsModalOpen} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* Product Modal */}
      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setProduct(null)
        }}
      />
      <Footer />
    </>
  )
}

export default App
