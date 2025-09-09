import React from 'react'
import {
Modal,
Form,
Input,
DatePicker,
Select,
InputNumber,
Button,
Space,
Divider,
message,
} from "antd";
import { useState } from 'react';



const Nav = ({seeds}) => {
console.log(seeds);
const [toggle, settoggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const [seedItem, setseedItem] = useState([1]);

const adder = (num) => {
  setseedItem([...seedItem, num+1]);
};
  
  return (
    <div className='w-full h-26 flex items-center justify-between border-b-1 p-3'>
      <div className='logo w-50 h-full '>
<img className='' src="Krishi_logo.png" alt="logo" />
      </div>
      <div className='flex gap-4'>
    <button onClick={() =>toggle===true?settoggle(false):settoggle(true)} className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Create Order</button>
      <h3 className='text-3xl font-extrabold'>DashBoard</h3>
      <Modal 
    title="Create Order"
    visible={true}
    footer={null}
    onCancel={() => settoggle(false)}
    >
      <Form>
       <Form.Item label="Customer Name">
        <Input  />
       </Form.Item >
       <Form.Item label="Delivery Date">
        <Input  />
       </Form.Item>
       <Form.Item label="Status">
        <Input  />
       </Form.Item>
    <Form.List name="items">
  {(fields, { add, remove },{errors}) => (
    <>
      {fields.map(({ index,name}) => (
        <Space key={index} align="baseline">
          <Form.Item
            // {...restField}
            name={[name, "item"]}
            rules={[{ required: true, message: "Missing item" }]}
          >
             <Select className='min-w-50' placeholder="Select an item">
              {seeds.map((seed) => (
                <Select.Option key={seed._id} value={seed._id}>
                  {seed.name}
                </Select.Option>
              ))}
            </Select>
            {/* <Input placeholder="Item" /> */}
          </Form.Item>
          <Form.Item
            // {...restField}
            name={[name, "qty"]}
            rules={[{ required: true, message: "Missing quantity" }]}
          >
            <InputNumber min={1} placeholder="Quantity" />
          </Form.Item>
          <Button danger onClick={() => remove(name)}>Remove</Button>
        </Space>
      ))}

      <Button type="dashed" onClick={() => add()}>
        Add Item
      </Button>
    </>
  )}
</Form.List>
</Form>
      {/* <Form.List>
        {seedItem.map((item, index) => (
        <div key={index}>
          <Form.Item label={`Item ${index + 1}`}>
            <Select placeholder="Select an item">
              {seeds.map((seed) => (
                <Select.Option key={seed._id} value={seed._id}>
                  {seed.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label={`Quantity `}>
            <InputNumber placeholder="Enter quantity" />
          </Form.Item>
          <Divider />
        </div>
      ))}
      </Form.List> */}

      
       <div className='flex justify-end'>
        
        <div>
         <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Submit Order</button>
        </div>
       </div>
      
      </Modal>
     
      </div>
    </div>
  )
}

export default Nav