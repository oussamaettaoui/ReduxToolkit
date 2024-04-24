import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Product from './component/Product'
import Card from './component/Card'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/product/:id' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App