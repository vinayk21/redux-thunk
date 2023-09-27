import React from 'react'
import Dashboard from './Componets/Dashboard'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Cardscart from './Componets/cardscart'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/cart' element={<Cardscart/>}/>
      </Routes>
    </>
  )
}

export default App

