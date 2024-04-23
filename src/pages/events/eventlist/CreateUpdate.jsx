import { Modal, Input, Form, Select, DatePicker, Button } from "antd";
import { addFunction, updateFunction } from "../../../services/events/events";

export default function CreateUpdate({
  isModalOpen,
  handleOk,
  handleCancel,
  payload,
  form,
  setUpdatedCount,
  setEvent,
}) {
  const submitForm = (values) => {
    payload.current.data = { ...payload.current.data, ...values };
    console.log(payload.current.data, "create")
    if (payload.current.operation === "ADD") {
      payload.current.data.eventId = Math.random();
      addFunction(payload.current.data).then((data) => {
        setEvent(data);
        setUpdatedCount((count) => count + 1);
        handleCancel();
        
      });
    } else {
      updateFunction(payload.current.data, "eventId").then((data) => {
        console.log(data)
        setEvent(data);
        setUpdatedCount((count) => count + 1);
        handleCancel();
       console.log(data);
      });
    }
  };

  return (
    <>
      <Modal
        title="Event Detail"
        open={isModalOpen}
        onClick={handleOk}
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
          autoComplete="off"
        >
          <Form.Item
            label="Event Id"
            name="eventId"
            rules={[{ required: true, message: "Please input your event Id!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Event Name"
            name="eventName"
            rules={[
              { required: true, message: "Please input your EventName!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="eventPoster"
            label="Event Poster URL"
            rules={[
              { type: "url", warningOnly: true },
              { type: "string", min: 6 },
            ]}
          >
            <Input />
          </Form.Item>

          {/* <Form.Item label="Language" name="language">
            <Select>
              <Select.Option value="Hindi">Hindi</Select.Option>
              <Select.Option value="English">English</Select.Option>
              <Select.Option value="Punjabi">Punjabi</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Event Duration"
            name="duration"
            rules={[
              { required: true, message: "Please input your Event Duration!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="genres"
            label="Event Genre"
            rules={[
              { required: true, message: "Please input your Event Genre!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="venue"
            label="Event Venue"
            rules={[
              { required: true, message: "Please input your Event Venue!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="censorBoardRating"
            label="Censor Board Rating"
            rules={[
              {
                required: true,
                message: "Please input your Censor Board Rating!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="eventTime"
            label="Event Time"
            rules={[
              { required: true, message: "Please input your Event Time!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please input your Price!" }]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item>
            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
            {payload.current.operation === "ADD" ? "Add Event" : "Update Event"}
          </Button>

          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
