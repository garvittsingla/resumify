import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { Route,Routes,BrowserRouter } from 'react-router-dom'




const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="login" element={<Login />}/>
        
          <Route path="dashboard" element={
            <Dashboard />
          }/>
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App