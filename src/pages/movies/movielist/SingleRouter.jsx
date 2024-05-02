import { Form } from "antd";
import { useRef, useState } from "react";
import MovieListPage from "./MovieListPage";
import CreateUpdate from "./CreateUpdate";

const SingleRouter = ({ onSelectMovie }) => {
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
  const initFormData = () => {
    payload.current.data
      ? form.setFieldsValue(payload.current.data)
      : form.resetFields();
  };

  return (
    <>
      <CreateUpdate
        form={form}
        payload={payload}
        setUpdatedCount={setUpdatedCount}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModelOpen}
      // onSelectMovie={onSelectMovie}
      />
      <MovieListPage
        payload={payload}
        initFormData={initFormData}
        updatedCount={updatedCount}
        showModal={showModal}
        onSelectMovie={onSelectMovie}
      />

    </>
  );
};
export default SingleRouter;