import React from 'react'
import Nav2 from '../../components/Nav2'
import Tray from '../../components/Tray'

const Tools = () => {
  return (
    <div className='w-full h-screen'>
        <Nav2/>
    <div className='w-full h-9/10 flex  items-center '>
    <div className="optionList flex justify-center items-center w-2/10  h-full">
    <div className="optionBox  w-6/10">
        <div className='flex flex-col p-2 w-full rounded-2xl gap-3 bg-amber-50'>

            <h2>Tray Calculator</h2>
            <h2>Price Calculator</h2>
            <h2>Seed Density Calculator</h2>
            <h2>Excel Calculator</h2>
        </div>
        
    </div>
    </div>
    <div className="calculator flex justify-center items-center overflow-y-auto   w-8/10 h-full bg-green-900">
    <Tray></Tray>
    </div>

    </div>
    </div>
  )
}

export default Tools