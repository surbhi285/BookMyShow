import { useRef, useState } from "react";
import { Form, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import CreateUpdate from "./CreateUpdate";
import EventListPage from "./EventListPage";
import { removeFunction } from "../../../services/events/events";

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

  const handleDelete = (eventId) => {
    Modal.confirm({
      title: "Confirm Deletion",
      icon: <ExclamationCircleFilled />,
      content: "Are you sure you want to delete this event?",
      okText: "Delete",
      cancelText: "Cancel",
      onOk: () => {
        removeFunction(eventId, "eventId").then(() => {
          setUpdatedCount((count) => count + 1);
        });
      },
    });
  };

  let payload = useRef({
    operation: "",
    data: {},
  });

  console.log("check1", payload.current.data);

  const initFormData = () => {
    payload.current.data
      ? form.setFieldsValue(payload.current.data)
      : form.resetFields();
  };
  console.log(payload.current.data);

  return (
    <>
      <CreateUpdate
        form={form}
        payload={payload}
        setUpdatedCount={setUpdatedCount}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModelOpen}
        setEvent={setEvent}
        initFormData={initFormData}
      />

      <EventListPage
        payload={payload}
        initFormData={initFormData}
        updatedCount={updatedCount}
        showModal={showModal}
        setEvent={setEvent}
        next={next}
        handleDelete={handleDelete}
      />
    </>
  );
}
