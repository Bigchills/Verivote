import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage';
import Proposalpage from './Pages/Proposalpage';

const App = () => {
  return (
    <BrowserRouter>

    <div>


      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/proposals' element={<Proposalpage/>}/>
      </Routes>
    </div>

    
    </BrowserRouter>



  )
}

export default App
