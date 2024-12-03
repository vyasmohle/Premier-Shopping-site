import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import AddProduct from './components/AddProduct'
function App() {
  return (
    <div className='w-full h-screen flex' >

    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/newProduct' element={<AddProduct/>} ></Route>
      <Route path='/details/:id' element={<Details/>} ></Route>
    </Routes>






    </div>
  )
}

export default App 