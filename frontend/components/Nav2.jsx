import React from 'react'

const Nav2 = () => {
  return (
    <div className='Nav w-full h-20 px-3 flex justify-between bg-green-600 '>
        <div className="logo flex justify-center   w-2/10 h-full ">
                
                    <div className="logobox">
                        <img src="KK_logo.jpg" alt="" />
                    </div>
                    <div className="logotext flex justify-center items-center">
                        <h1 className=''>Krishi Kutir <br />
                        <span className='text-2xl text-green-500 font-bold'>Manager</span>
                        </h1>
                    </div>
                
        </div>
        <div className='list w-4/10 h-full '>
    <ul className='flex  justify-evenly items-center h-full'>
        <li>Home</li>
        <li>Team/Developer</li>
        <li>Subscription</li>
        <li>Tools</li>
    </ul>
        </div>
        <div className='signIn w-3/10 h-full bg-yellow-400'>
    Sign up button 
        </div>

    </div>
  )
}

export default Nav2