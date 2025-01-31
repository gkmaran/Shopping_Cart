import './App.css'
import Header from './components/header'
import { createContext, useEffect, useState } from 'react'
import Home from './components/Home'
import Viewcart from './components/Viewcart'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

export const cartContext=createContext()
function App() {

  const[cart,setCart]=useState(()=>{
    return JSON.parse(localStorage.getItem('cart'))||[]})
    useEffect(()=>{
      localStorage.setItem('cart' ,JSON.stringify(cart))
    },[cart])
  return (
    <>
      <cartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
      <Header cart={cart}/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Viewcart/> }/>
        </Routes>
      </div>
      </BrowserRouter>
      </cartContext.Provider>
    </>
  )
}

export default App
