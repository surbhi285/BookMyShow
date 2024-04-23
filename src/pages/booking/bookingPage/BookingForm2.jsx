import React from 'react'
import { Modal, Input, Form, Button, DatePicker} from "antd";

export default function BookingForm2({isModalOpen, handleCancel, handleOk, form, payload}) {
    
    function form2(values){
        payload.current.data = {...payload.current.data, ...values}
        handleOk();
        }

  return (
    <>
    <Modal
    title="Booking Detail"
    open={isModalOpen}
    onOk={handleOk}
    onCancel={handleCancel}
    footer= {null}
  > 
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={form2}
      form = {form}
    >
      <Form.Item
        label="Movie Name / Event Name"
        name="movieName"
        rules={[{ required: true, message: "Please input your Movie name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tickets"
        name="tickets"
        rules={[{ required: true, message: "Please input your Tickets!" }]}
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
          { required: true, message: "Please input your Timing!" },
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
      <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Next
      </Button>
    </Form.Item>
    </Form>
   </Modal> 
</>
  )
}
