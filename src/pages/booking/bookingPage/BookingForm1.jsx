import React from 'react'
import { Modal, Input, Form, Button} from "antd";

export default function BookingForm1({isModalOpen, handleCancel, handleOk, form, payload, next}) {

  function form1(values){
  payload.current.data = {...payload.current.data, ...values} 
  console.log(payload.current.data)
  handleOk();
  }
  console.log(payload.current.data)  

  return (
    <>
    <Modal
    title="Personal Detail"
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
      onFinish={form1}
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
          { required: true, message: "Please input your Age!" },
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
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" onClick={next}>
       Next
      </Button>
    </Form.Item>
    </Form>
  </Modal>
</>
  )
}




