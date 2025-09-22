"use client"
// import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'

const Card = ({title,number,category,children,date}) => {

  // const data =  fetch(`http://localhost:5000/api/${category}`);
  // console.log(category);


  const [apiData, setapiData] = useState([])
  const [orders, setorders] = useState([])
  useEffect(() => {
    if(category=="Deliveries"){
      fetch(`http://localhost:5000/api/orders`)
      .then(response => response.json()).then(data => setorders(data));
   
  }
    else{
      fetch(`http://localhost:5000/api/${category}`)
      .then(response =>  response.json()).then(data => setapiData(data));
      
    }
  
     
  })

  return (
    <div className='Card border-2 container flex flex-col justify-evenly w-2/10 h-4/10 p-2 bg-amber-50 rounded-2xl'>
        {category =="Deliveries"?
        <>
        <div className='title'>
    <h2 className='text-3xl'>{title}</h2>
        </div>
        <div>
    <h3 className='text-2xl'>{orders.filter((order) => order.delivery_date.split('T')[0] == date).length}</h3>
{children}
        </div>
        </>
        :
        <>
        <div className='title'>
    <h2 className='text-3xl'>{title}</h2>
        </div>
        <div>
    <h3 className='text-2xl'>{apiData.length}</h3>
{children}
        </div>
        </>
        
        }
    </div>
  )
}

export default Card