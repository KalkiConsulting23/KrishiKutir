import { useEffect, useState } from 'react'

import './App.css'
import Nav from '../components/Nav'
import Hero from '../components/Hero'

function App() {
  const [seeds, setseeds] = useState([])
useEffect(() => {
    
      fetch(`http://localhost:5000/api/seed-varieties`)
      .then(response => response.json()).then(data => setseeds(data));
      
    }
   
  
     
  , [])

  return (
  <>
  <div className='w-screen h-screen'>
  <Nav seeds={seeds}/>
  <Hero/>

  </div>
  </>
  )
}

export default App
