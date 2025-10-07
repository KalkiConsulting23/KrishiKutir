import { useEffect, useState } from 'react'

import './App.css'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Tools from './Pages/Tools'

function App() {
//   const [seeds, setseeds] = useState([])
// useEffect(() => {
    
//       fetch(`http://localhost:5000/api/seed-varieties`)
//       .then(response => response.json()).then(data => setseeds(data));
      
//     }
   
  
     
//   , [])

  return (
  <>
  {/* <div className='w-screen h-screen'>
  <Nav seeds={seeds}/>
  <Hero/>

  </div> */}
   <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<Tools />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
  </>
  )
}

export default App
