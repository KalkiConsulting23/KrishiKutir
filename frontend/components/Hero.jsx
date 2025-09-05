import React from 'react'
import Card from './Card'

const Hero = () => {
   const date = new Date().toISOString().split('T')[0];
   
  return (
    <div className='w-full flex  justify-center h-2/5 p-2 rounded-2xl '>
      <div className='w-9/10  flex flex-wrap gap-4  '>
      
        <Card title={"Delivery Today"} number={55} category={"Deliveries"} date={date}></Card>
        <Card title={"Seeds Varieties"} number={100} category={"seed-varieties"}></Card>
        <Card title={"Total Customer"} number={55}>
          <h1>Under testing</h1>
        </Card>
        <Card title={"Sowing today"} number={55} category={"sowing-plans"} date={date}></Card>
        {/* <Card title={"Pending Orders"} number={55} category={"orders"}></Card> */}
    </div>
    </div>
  )
}

export default Hero