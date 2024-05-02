import {
  Modal,
  Input,
  Form,
  Select,
  DatePicker,
  Button,
  Space,
  message,
  Upload,
} from "antd";
import { addFunction, updateFunction } from "../../../services/events/events";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
// import { Form, Input, Space } from 'antd';
import { useState } from "react";
import moment from "moment";

export default function CreateUpdate({
  isModalOpen,
  handleOk,
  handleCancel,
  payload,
  form,
  setUpdatedCount,
  Flex
}) {
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const submitForm = (values) => {
    console.log("submit")
    const transformedValue = {
      ...values,
      language: [values["language"]],
      genres: [values["genres"]],
      date: values["date"]?.map((date) => date.format("DD MMM YYYY")),
    };
    
    payload.current.data = { ...payload.current.data, ...transformedValue };
    console.log(payload, "create");
    if (payload.current.operation === "ADD") {
      payload.current.data.eventId = Math.random();
      addFunction(payload.current.data).then(() => {
        console.log(payload, "surbhi");
        setUpdatedCount((count) => count + 1);
        handleOk();
      });
    } else {
      updateFunction(payload.current.data, "eventId").then(() => {
        setUpdatedCount((count) => count + 1);
        handleOk();
      });
    }
    payload.current.data = {};
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
          {/* <Form.Item
            label="Event Id"
            name="eventId"
            rules={[{ required: true, message: "Please input your event Id!" }]}
          >
            <Input />
          </Form.Item> */}

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
              { required: true, message: "Please input your Event Poster!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Language" name="language">
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

          <Form.Item name="date" label="Date">
            <DatePicker multiple onChange={onChange} />
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
          </Form.Item>
          <Form.List name="artist">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{
                display: 'block',
                marginBottom: 8,

              }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, 'name']}
                label="Artist Name"
                rules={[
                  {
                    required: true,
                    message: 'Missing  name',
                  },
                ]}
              >
              <Input placeholder="Artist Name" />
 
              </Form.Item>
              
             <Form.Item
                {...restField}
                name={[name, 'image']}
                label="Artist Image"
                rules={[
                  {
                    required: true,
                    message: 'Missing  Image',
                  },
                ]}
              >
                <Input placeholder="Artist Image"/>
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} style={{marginLeft:"100%", marginTop:"0"}}/>
            </Space>
          ))}
           <Form.Item style={{marginLeft:120}}>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} >
              Add Artist
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>             
          <Form.Item
            name="eventImage"
            label="Event Poster 2"
            rules={[
              { required: true, message: "Please input your Event Poster!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={handleCancel}
              style={{ marginRight: "10px" }}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              {payload.current.operation === "ADD"
                ? "Add Event"
                : "Update Event"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
