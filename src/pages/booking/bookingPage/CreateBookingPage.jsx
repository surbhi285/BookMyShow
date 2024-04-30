import React, { useEffect, useRef, useState } from "react";
import FilterShowsList from "./FilterShowsList";
import ShowsList from "./ShowsList";
import { getFunction } from "../../../services/events/events";
import { getShowFunction } from "../../../services/shows/shows";
import { Form } from "antd";
import { useParams } from "react-router-dom";
import BookingMultiForm from "./BookingMultiForm";


const UI = {
    BookingForm1: "BookingForm1",
    BookingForm2: "BookingForm2",
    BookingForm3: "BookingForm3",
  };

export default function CreateBookingPage({setBookingData, next}) {

  const { id } = useParams();
  const [showSearch, setShowSearch] = useState({});
  const [shows, setShows] = useState(null);
  const [events, setEvents] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  
  useEffect(() => {
    Promise.all([getFunction(), getShowFunction()]).then((data) => {
      setEvents(data[0]);
      if (id) {
        let show = data[1]?.filter((show) => {
          return show.showId === parseInt(id);
        });
        setShows(show);
      } else setShows(data[1]);
    });
  }, [id]);

  let payload = useRef({
    operation: "",
    data: {},
  });

  const initFormData = () => {
    payload.current.data
      ? form.setFieldsValue(payload.current.data)
      : form.resetFields();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {id ? (
        <>
         <ShowsList
         showSearch={showSearch}
         events={events}
         shows={shows}
         showModal={showModal}
         payload={payload}
         initFormData={initFormData}
       />
         <BookingMultiForm
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          handleOk={handleOk}
          form={form}
          payload={payload}
          setBookingData={setBookingData}
          next={next}
        />
     </>
      ) : (
        <>
          <FilterShowsList
            showSearch={showSearch}
            setShowSearch={setShowSearch}
          />
          <ShowsList
            showSearch={showSearch}
            events={events}
            shows={shows}
            showModal={showModal}
            payload={payload}
            initFormData={initFormData}
          />

          <BookingMultiForm
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          handleOk={handleOk}
          form={form}
          payload={payload}
          setBookingData={setBookingData}
          next={next}
        />
        </>
      )}
    </>
  );
}
