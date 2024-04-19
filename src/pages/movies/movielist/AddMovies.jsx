import { Form, Input } from "antd";
import React from "react";
const AddMovies = () => {
    return (
        <Form>

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
            {/* <Form.Item>
                <Button type="primary" onClick={cancel}>
                    Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                    {payload.current.operation === "ADD" ? "Add Event" : "Update Event"}
                </Button>
            </Form.Item> */}
        </Form>
    );
};

export default AddMovies;


