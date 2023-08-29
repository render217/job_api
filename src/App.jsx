import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Job from './pages/Job'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:jobId' element={<Job/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App