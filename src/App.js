import React from 'react'
import Main from './Main'
// import Seat from './Seat'
// import Counter from './Counter'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import Register from './Page/Register'
import Login from './Page/Login'
import { Route, Routes } from "react-router-dom";
import Profile from './Page/Profile'
import Footer from './Page/Footer'

// import Counter from './Counter'

const App = () => {
  const redux = useSelector((state) => state);
  console.log('redux', redux)
  return (
    <div>
    
    <Navbar/>
     {/* <Main/> */}
    <Routes>
    
       <Route path="/" exact element={<Main/>} />
          
          <Route path="/register" exact element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />

          
         
        </Routes>
        <Footer/>
    </div>
  )
}

export default App