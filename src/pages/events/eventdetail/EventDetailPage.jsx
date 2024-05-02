import React, { useEffect, useState, useRef } from "react";
import { getDetailFunction } from "../../../services/events/events";
import EventDetail from "./EventDetail";
import { getReviewFunction } from "../../../services/review/review";
import AddReview from "./AddReview";
import { Form } from "antd";

export default function EventDetailPage({ event, back, onSelectArtist }) {
  //    const[eventDetail, setEventDetail] = useState(null);

  //  useEffect(()=>{
  //     getDetailFunction(event.eventId, "eventId").then((detail)=>{
  //         setEventDetail(detail)
  //     })
  //  },[event])
  //  console.log(eventDetail)

  const [review, setReview] = useState(null);
  const [updatedCount, setUpdatedCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    getReviewFunction().then((data) => {
      setReview(data);
    });
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const payload = useRef({
    operation: "",
    data: {},
  });

  const initFormData = () => {
   payload.current.data.reviewId ?
   form.setFieldsValue(payload.current.data)
   : form.resetFields();
  };

  console.log("data",payload.current.data)



  return (
    <>
      <AddReview
        form={form}
        payload={payload}
        setUpdatedCount={setUpdatedCount}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        setReview={setReview}
      />

      <EventDetail
        eventDetail={event}
        onSelectArtist={onSelectArtist}
        back={back}
        review={review}
        payload={payload}
        initFormData={initFormData}
        updatedCount={updatedCount}
        showModal={showModal}
        setReview={setReview}
      />
    </>
  );
}
