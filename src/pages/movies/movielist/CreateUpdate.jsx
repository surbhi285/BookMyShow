import { Modal, Input, Form, Select, DatePicker, Button } from "antd";
import { addFunction, updateFunction } from "../../../services/movie/movies";


export default function CreateUpdate({
  isModalOpen,
  handleOk,
  handleCancel,
  payload,
  form,
  setUpdatedCount,
  onSelectMovie
}) {
  const submitForm = (values) => {
    payload.current.data = { ...payload.current.data, ...values };
    console.log(payload.current.data, "create")
    if (payload.current.operation === "ADD") {
      payload.current.data.movieId = Math.random();
      addFunction(payload.current.data).then((data) => {
        // onSelectMovie(data.movieId);
        setUpdatedCount((count) => count + 1);
        handleCancel();
      });
    } else {
    
      updateFunction(payload.current.data, "movieId").then((data) => {
        console.log(data)
        // onSelectMovie(data.movieId);
        setUpdatedCount((count) => count + 1);
        handleCancel();
       console.log(data);
      });
    }
  };

  return (
    <>
      <Modal
        title="Movie Detail"
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
                label="Movie_Id"
                name="movieId"
                rules={[
                    {
                        required: true,
                        message: 'Please provide Movie Id!',
                    },
                ]}
            >
                <Input style={{
                    width: '100%',
                }} placeholder="'Please provide Movie Id', " />
            </Form.Item > */}
          <Form.Item
                label="Movie Name"
                name="movieName"
                rules={[
                    {
                        required: true,
                        message: 'Please provide Movie Name!',
                    },
                ]}
            >
                <Input style={{
                    width: '100%',
                }} placeholder="'Please provide Movie Name', " />
            </Form.Item >
            <Form.Item
                label="Movie Poster"
                name="moviePoster"
                rules={[
                    {
                        required: true,
                        message: 'Please provide Movie Poster!',
                    },
                ]}
            >
                <Input style={{
                    width: '100%',
                }} placeholder="'Please provide Movie Poster', " />
            </Form.Item >
            <Form.Item
                label="Movie Languages"
                name="movieLanguages"
                rules={[
                    {
                        required: true,
                        message: 'Please provide Movie Languages!',
                    },
                ]}
            >
                <Input style={{
                    width: '100%',
                }} placeholder="'Please provide Movie Languages', " />
            </Form.Item >
            <Form.Item
                label="Duration"
                name="duration"
                rules={[
                    {
                        required: true,
                        message: 'Please provide Duration!',
                    },
                ]}
            >
                <Input style={{
                    width: '100%',
                }} placeholder="'Please provide Duration', " />
            </Form.Item >
            <Form.Item
                label="Genres"
                name="genres"
                rules={[
                    {
                        required: true,
                        message: 'Please provide Genres!',
                    },
                ]}
            >
                <Input style={{
                    width: '100%',
                }} placeholder="'Please provide Genres', " />
            </Form.Item >
            <Form.Item
                label="Release Date"
                name="Release Date"
                rules={[
                    {
                        required: true,
                        message: 'Please provide Release Date!',
                    },
                ]}
            >
                <Input style={{
                    width: '100%',
                }} placeholder="'Please provide Release Date', " />
            </Form.Item >
            <Form.Item
                label="Movie Details"
                name="movieDetails"
                rules={[
                    {
                        required: true,
                        message: 'Please provide Movie Details!',
                    },
                ]}
            >
                <Input style={{
                    width: '100%',
                }} placeholder="'Please provide Movie Details', " />
            </Form.Item >
            <Form.Item
                label="Censor Board Rating"
                name="censorBoardRating"
                rules={[
                    {
                        required: true,
                        message: 'Please provide Censor Board Rating!',
                    },
                ]}
            >
                <Input style={{
                    width: '100%',
                }} placeholder="'Please provide Censor Board Rating', " />
            </Form.Item >     
          <Form.Item>
            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
            {payload.current.operation === "ADD" ? "Add Movie" : "Update Movie"}
          </Button>

          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

