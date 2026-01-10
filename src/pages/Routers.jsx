import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import History from './History'
import Izd from './Izd'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/history' element={<History />}></Route>
        <Route path="/izd" element={<Izd />}></Route>
    </Routes>
  )
}

export default Routers