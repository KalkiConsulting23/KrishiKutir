import React from 'react'
import Card from './Card'

const Hero = () => {
  return (
    <div className='w-full flex  justify-center h-2/5 p-2 rounded-2xl '>
      <div className='w-9/10  flex flex-wrap gap-4  '>
        <Card title={"Orders Today"} number={55}></Card>
        <Card title={"Delivery Today"} number={55}></Card>
        <Card title={"Seeds Varieties"} number={100}></Card>
        <Card title={"Total Customer"} number={55}></Card>
        <Card title={"Seed today"} number={55}></Card>
        <Card title={"Pending Orders"} number={55}></Card>
    </div>
    </div>
  )
}

export default Hero