import React from 'react'

const Card = ({title,number}) => {
  return (
    <div className='Card border-2 container flex flex-col justify-evenly w-2/10 h-4/10 p-2 bg-amber-50 rounded-2xl'>
        <div className='title'>
    <h2 className='text-3xl'>{title}</h2>
        </div>
        <div>
    <h3 className='text-2xl'>{number}</h3>
        </div>
    </div>
  )
}

export default Card