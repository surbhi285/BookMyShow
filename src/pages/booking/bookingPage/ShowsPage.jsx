import React, { useEffect, useRef, useState } from "react";
import FilterShowsList from "./FilterShowsList";
import ShowsList from "./ShowsList";
import { getFunction } from "../../../services/events/events";
import { getShowFunction } from "../../../services/shows/shows";
// import ShowDetail from "./ShowDetail";
import { useParams } from "react-router-dom";
import {Form} from 'antd'
import BookingModal1 from "./BookingModal1";
import BookingModal2 from "./BookingModal2";
import BookingModal3 from "./BookingModal3";
import { getFunctions } from "../../../services/movie/movies";

const UI = {
  ShowPage :"ShowPage",
  BookingConfirmed : "BookingConfirmed"
}

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
  // const [ui, setUi] = useState(UI.ShowPage);

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
       <BookingModal1
       isModalOpen={isModalOpen1}
       handleCancel={handleCancel1}
       handleOk={handleOk1}
       form={form}
       payload={payload}
     />
     
     <BookingModal2
       isModalOpen={isModalOpen2}
       handleCancel={handleCancel2}
       handleOk={handleOk2}
       form={form}
       payload={payload}
     />
   
     <BookingModal3
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
          <BookingModal1
            isModalOpen={isModalOpen1}
            handleCancel={handleCancel1}
            handleOk={handleOk1}
            form={form}
            payload={payload}
          />
          
          <BookingModal2
            isModalOpen={isModalOpen2}
            handleCancel={handleCancel2}
            handleOk={handleOk2}
            form={form}
            payload={payload}
          />
        
          <BookingModal3
            isModalOpen={isModalOpen3}
            handleCancel={handleCancel3}
            handleOk={handleOk3}
            form={form}
            payload={payload}
            // next = {()=>{setUi(UI.BookingConfirmed)}}
          />
        </>
      )}
    </>
  );
}
