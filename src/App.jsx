import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Portfolio from "./pages/Portfolio"
import Landing from "./pages/Landing"

import { Route,Routes,BrowserRouter } from 'react-router-dom'




const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Landing />}/>
        <Route path="login" element={<Login />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="portfolio/:portfolioid" element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App