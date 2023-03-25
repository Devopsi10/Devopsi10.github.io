import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'

// pages
import Home from './client/Home'
import About from './client/About'
import Project from './client/Project'
import Contact from './client/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
