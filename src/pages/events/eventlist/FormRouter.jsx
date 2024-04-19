import { useRef, useState } from "react";
import { Form } from "antd";
import CreateUpdate from "./CreateUpdate";
import EventListPage from "./EventListPage";

export default function FormRouter({ setEvent, next }) {
  const [updatedCount, setUpdatedCount] = useState(0);
  const [isModelOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  

    const showModal = () => {
    setIsModalOpen(true);
  };  

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  let payload = useRef({
    operation: "",
    data: {},
  });

  console.log("check1", payload.current.data)
  const initFormData = () => {
    payload.current.data
      ? form.setFieldValue(payload.current.data)
      : form.resetFields();
  };
  console.log(payload.current.data)

  return (
    <>
      <CreateUpdate
        form={form}
        payload={payload}
        setUpdatedCount={setUpdatedCount}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModelOpen}
        setEvent = {setEvent}
      />
      <EventListPage
        payload={payload}
        initFormData={initFormData}
        updatedCount={updatedCount}
        showModal={showModal}
        setEvent={setEvent}
        next={next}
      />
    </>
  );
}
