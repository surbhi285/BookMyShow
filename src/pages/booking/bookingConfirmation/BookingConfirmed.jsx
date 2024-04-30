import { Typography, Button, Flex, Row, Col } from "antd";
import { CheckCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { getBookingFunction } from "../../../services/booking/booking";

export default function BookingConfirmed({ bookingData }) {
  const [booking, setBooking] = useState(null);

  // useEffect(()=>{
  //  getBookingFunction().then((bookingData)=>{
  //   console.log(bookingData)
  //    setBooking(bookingData);
  //  })
  // },[updatedCount]);
  // console.log("bookinginfo", booking)

  console.log("booking", bookingData);

  return (
    <div
      style={{
        // backgroundColor: "#F5F5F5",
        minHeight: "100vh",
        // padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // paddingLeft: "5%",
          paddingTop: "5px",
          backgroundColor: "#ACE1AF",
          height: "80px",
          color: "#006A4E",
          marginBottom: "5%",
        }}
      >
        <Typography.Title
          level={2}
          style={{ color: "#006A4E", paddingBottom: "10px" }}
        >
          <CheckCircleOutlined
            style={{ marginRight: "30px", fontSize: "50px" }}
          />
          Thank you for booking with us
        </Typography.Title>
      </div>
      <Row justify="space-around">
        <Col span={12}>
          <Card
            style={{
              width: 600,
              margin: "auto",
              height: 250,
              // border: "2px solid black",
            }}
          >
            <Typography.Title
              style={{
                marginTop:"-25px",
                backgroundColor: "rgb(220, 53, 75)",
                color: "white",
                width:"109%",
                marginLeft:"-24px",
                paddingTop:"10px",
                paddingLeft:"25%",
                paddingBottom: "10px"
              }}
            >
              Personal Details
            </Typography.Title>

            <div style={{ marginLeft: "10%", marginBottom: "20px" }}>
            <Flex align="center">
    <UserOutlined
      style={{
        background: "#D0D0D0",
        fontSize: "30px",
        borderRadius: "50%",
        color: "white",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
    <Typography.Title level={4} style={{ marginLeft: "10px" }}>
      {bookingData.name}
    </Typography.Title>
  </Flex>

              <Typography.Title level={5} style={{marginTop:"-5px"}}>Age: <span style={{marginLeft:"25%"}}> {bookingData.age}</span></Typography.Title>
              <Typography.Title level={5} style={{marginTop:"-5px"}}>
                Phone Number: 
                <span style={{marginLeft:"8%"}}>{bookingData.phoneNumber}</span>
              </Typography.Title>
              <Typography.Title level={5} style={{marginTop:"-5px"}}>
                Email: 
                <span style={{marginLeft:"22%"}}>{bookingData.email}</span>
              </Typography.Title>
            </div>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 400,
              margin: "auto",
            }}
          >
               <Typography.Title
              style={{
                marginTop:"-25px",
                backgroundColor: "rgb(220, 53, 75)",
                color: "white",
                width:"114%",
                marginLeft:"-24px",
                paddingTop:"10px",
                paddingLeft:"20%",
                paddingBottom: "10px"
              }}
            >
              Booking Details
            </Typography.Title>
            <div>
            <Typography.Title level={5}>
                Movie Name/Event Name: <span style={{marginLeft:"10%"}}> {bookingData.movieName}</span>
              </Typography.Title>
              <Typography.Title level={5} style={{marginTop:"-5px"}}>Tickets: <span style={{marginLeft:"50%"}}>{bookingData.tickets}</span></Typography.Title>
              <Typography.Title level={5} style={{marginTop:"-5px"}}>
                Date: <span style={{ marginLeft: "30%" }}>{bookingData.date}</span>
                </Typography.Title>
            <Typography.Title level={5} style={{marginTop:"-5px"}}> Time: <span style={{ marginLeft: "55%" }}>{bookingData.timing}</span></Typography.Title>
            <Typography.Title level={5} style={{marginTop:"-5px"}}>Price: <span style={{ marginLeft: "55%" }}>₹{bookingData.price}</span></Typography.Title>
            <Typography.Title level={5} style={{marginTop:"-5px"}}>Seat Number:<span style={{ marginLeft: "37%" }}>{bookingData.seatNumber}</span></Typography.Title>
              <Typography.Title level={2} style={{ marginLeft: "5px", color: "rgb(220, 53, 75)"}}>
                Total Price{" "}
                <span style={{ marginLeft: "25%"}}>
                  ₹ {bookingData.totalPrice}
                </span>
              </Typography.Title>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
