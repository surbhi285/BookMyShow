import React, { useEffect, useRef, useState } from "react";
import FilterShowsList from "./FilterShowsList";
import ShowsList from "./ShowsList";
import { getFunction } from "../../../services/events/events";
import { getShowFunction } from "../../../services/shows/shows";
// import ShowDetail from "./ShowDetail";
import { useParams } from "react-router-dom";
import {Form, Modal} from 'antd'
import BookingForm1 from "./BookingForm1";
import BookingForm2 from "./BookingForm2";
import BookingForm3 from "./BookingForm3";
import { getFunctions } from "../../../services/movie/movies";

// const UI = {
//   BookingModal1:"Form1",
//   BookingModal2:"Form2",
// }

export default function ShowsPage() {
  const { id } = useParams();
  const [showSearch, setShowSearch] = useState({});
  const [shows, setShows] = useState(null);
  const [events, setEvents] = useState(null);
  const [movies, setMovies] = useState(null);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [form] = Form.useForm();
  // const [ui, setUi] = useState(UI.BookingModal1);

  let payload = useRef({
    operation: "",
    data:{},
  })

  const initFormData=()=>{
    payload.current.data ? form.setFieldsValue(payload.current.data) : form.resetFields()
   }

  console.log(payload.current.data)

  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = () => {
    setIsModalOpen2(true);
    setIsModalOpen1(false);
   
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const handleOk2 = () => {
    setIsModalOpen2(false);
    setIsModalOpen3(true);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
    setIsModalOpen1(true);
  };

  const handleOk3 = () => {
    setIsModalOpen3(false); 
  };

  const handleCancel3 = () => {
    setIsModalOpen3(false);
    setIsModalOpen2(true);
  };
  useEffect(() => {
    Promise.all([getFunction(), getShowFunction(), getFunctions()]).then((data) => {
      setEvents(data[0]);
      setMovies(data[2])
      if (id) {
        let show = data[1]?.filter((show) => {
          return show.showId === parseInt(id);
        });
        setShows(show);
      } else setShows(data[1]);
    });
  }, []);

  return (
    <>
      {id ? (
        <>
         <ShowsList
         showSearch={showSearch}
         events={events}
         movies={movies}
         shows={shows}
         showModal={showModal1}
         payload={payload}
         initFormData={initFormData}
       />

       <BookingForm1
       isModalOpen={isModalOpen1}
       handleCancel={handleCancel1}
       handleOk={handleOk1}
       form={form}
       payload={payload}
     />
     
     <BookingForm2
       isModalOpen={isModalOpen2}
       handleCancel={handleCancel2}
       handleOk={handleOk2}
       form={form}
       payload={payload}
     />
   
     <BookingForm3
       isModalOpen={isModalOpen3}
       handleCancel={handleCancel3}
       handleOk={handleOk3}
       form={form}
       payload={payload}
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
            movies={movies}
            shows={shows}
            showModal={showModal1}
            payload={payload}
            initFormData={initFormData}
          />
          <Modal>
          <BookingForm1
            isModalOpen={isModalOpen1}
            handleCancel={handleCancel1}
            handleOk={handleOk1}
            form={form}
            payload={payload}
          />
          </Modal>
          <BookingForm2
            isModalOpen={isModalOpen2}
            handleCancel={handleCancel2}
            handleOk={handleOk2}
            form={form}
            payload={payload}
          />
        
          <BookingForm3
            isModalOpen={isModalOpen3}
            handleCancel={handleCancel3}
            handleOk={handleOk3}
            form={form}
            payload={payload}
          />
        </>
      )}
    </>
  );
}
