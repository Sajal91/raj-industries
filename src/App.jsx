import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
