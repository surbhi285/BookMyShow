import React from 'react'
import { Modal, Input, Form, DatePicker, Button} from "antd";
import { addFunction } from '../../../services/booking/booking';
import { Link } from 'react-router-dom';

export default function BookingModal3({isModalOpen, handleCancel, handleOk, form, payload, next}) {
    console.log(payload.current.data);
    const submitForm = (values) => {
          payload.current.data = { ...payload.current.data, ...values };
          if (payload.current.operation === "ADD") {
            payload.current.data.eventId = Math.random(); 
            addFunction(payload.current.data).then((data)=>{
                // next();
            })
              }
          }
    
  return (
    <>
    <Modal
    title="Personal & Booking Detail"
    open={isModalOpen}
    onOk={handleOk}
    onCancel={handleCancel}
    footer={null}
  >
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={submitForm}
      form={form}   
    >
     <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[
          { required: true, message: "Please input your age!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Phonenumber"
        label="Phone Number"
        rules={[
          { required: true, message: "Please input your Phone Number!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Email"
        label="email"
        rules={[
            { required: true, message: "Please input your Email Id!" },
          ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Movie Name / Event Name"
        name="movieName"
        rules={[{ required: true, message: "Please input your Movie name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>

      <Form.Item
        label="Time"
        name="timing"
        rules={[
          { required: true, message: "Please input your Time!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Price"
        label="price"
        rules={[
            { required: true, message: "Please input your Price!" },
          ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Seat Number"
        label="seatNumber"
        rules={[
          { required: true, message: "Please input your Seat Number!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Total Price"
        name="totalPrice"
        rules={[{ required: true, message: "Please input your Total Price!" }]}
      >
        <Input />
      </Form.Item>
      <Link to="/bookingConfirmation">
      <Button type="primary" htmlType="submit">
       Submit
      </Button>
      </Link>
    </Form>
  </Modal>
</>
  )
}
