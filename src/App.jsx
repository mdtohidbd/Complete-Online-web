
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './Components/Nav/Nav'

import ProductDetails from './Components/Pages/ProductDetails'
import Wishlist from './Components/Pages/Wishlist'
import Cart from './Components/Pages/Cart'


import Footer from './Components/Footer/Footer'
import About from './Components/Pages/About'
import Index from './Components/Pages/Index'
import Shop from './Components/Pages/Shop'
import Stores from './Components/Pages/Stores'
import Blog from './Components/Pages/Blog'
import Contact from './Components/Pages/Contact'


function App() {

  return (
    <>
      <Nav/>
      <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>    
      <Route path="/About" element={<About/>}/> 
      <Route path="/Shop" element={<Shop/>}/>
       <Route path="/Stores" element={<Stores/>}/> 
       <Route path="/Blog" element={<Blog/>}/> 
       <Route path="/Contact" element={<Contact/>}/>     
      </Routes>

      <Footer/>
    </>
  )
}

export default App
