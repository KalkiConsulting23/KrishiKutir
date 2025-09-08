import React from 'react'
import {
Button,
Modal,
Form,
Input,
Select,
DatePicker,
InputNumber,
message,
} from "antd";
import { useState } from 'react';
const Nav = () => {
  
  return (
    <div className='w-full h-26 flex items-center justify-between border-b-1 p-3'>
      <div className='logo w-50 h-full '>
<img className='' src="Krishi_logo.png" alt="logo" />
      </div>
      <div className='flex gap-4'>
    <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Create Order</button>
      <h3 className='text-3xl font-extrabold'>DashBoard</h3>
      <Modal 
    title="Create Order"
    visible={true}
    footer={null}
    >
       <Form.Item label="Customer Name">
        <Input  />
       </Form.Item >
       <Form.Item label="Delivery Date">
        <Input  />
       </Form.Item>
       <Form.Item label="Status">
        <Input  />
       </Form.Item>
       <Form.Item label="Items" >
        <Select >
          <option value=""></option>
          </Select>
       </Form.Item>
      </Modal>
      </div>
    </div>
  )
}

export default Nav