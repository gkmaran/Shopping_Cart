import './App.css'
import Header from './components/header'
import { useEffect, useState } from 'react'
import Home from './components/Home'
import Viewcart from './components/Viewcart'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  const[cart,setCart]=useState(()=>{
    return JSON.parse(localStorage.getItem('cart'))||[]})
    useEffect(()=>{
      localStorage.setItem('cart' ,JSON.stringify(cart))
    },[cart])
  return (
    <>
      <BrowserRouter>
      <Header cart={cart}/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart}/>} />
          <Route path='/cart' element={<Viewcart cart={cart} setCart={setCart}/> }/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
