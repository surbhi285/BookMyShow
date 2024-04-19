import React from "react";
import { Button, Card, Divider, Typography, Flex } from "antd";
import {
  ArrowLeftOutlined,
  EnvironmentFilled,
  EditOutlined,
  StarFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function EventDetail({ eventDetail, review, back, payload, initFormData, updateCount, showModal, setReview }) {
 
  const findReview = () => {
    if (review) {
      return review?.filter (
        (review) => review.categoryId === eventDetail.eventId
      );
    }
    return [];
  };
  const eventReviews = findReview();
  
  const initCreateUpdate=()=>{
    payload.current.operation = "ADD";
    payload.current.data = {};
    setReview([...review, payload.current.operation])
    initFormData();
  }
  console.log("payload",payload.current.data)

  return (
    <>
      <Flex style={{ justifyContent: "space-between", marginBottom: "10px" }}>
        <Button className="backButton" onClick={back}>
          <ArrowLeftOutlined />
          Back
        </Button>
        <Button
          style={{
            color: "rgb(220, 53, 75)",
            border: "none",
            fontSize: "16px",
          }}
          onClick={()=>{initCreateUpdate(); showModal()}}
        >
          <EditOutlined />
          Add Review
        </Button>
      </Flex>
      <Card
        hoverable
        style={{
          width: 1000,
          margin: "auto",
        }}
        cover={<img src={eventDetail.eventImage} alt={eventDetail.eventName} />}
      >
        <Card.Meta
          style={{ fontSize: "40px" }}
          description={[
            <div>
              <Typography.Title className="eventTitle">
                {eventDetail.eventName}
              </Typography.Title>
              <Flex gap="large">
                <Typography className="eventDetails">
                  {eventDetail.genres.join(", ")} |{" "}
                  {eventDetail.language.join(", ")} |{" "}
                  {eventDetail.censorBoardRating} | {eventDetail.duration}
                </Typography>
                <Link to={`booking/event/${eventDetail.eventId}`}>
                  <Button type="primary" className="bookButton">
                    BOOK
                  </Button>
                </Link>
              </Flex>
              <Divider />
              <Typography className="eventDate">
                {eventDetail.date.length <= 1
                  ? eventDetail.date[0]
                  : `${eventDetail.date[0]} - ${
                      eventDetail.date[eventDetail.date.length - 1]
                    }`}{" "}
                {eventDetail.eventTime} onwards
                <EnvironmentFilled
                  style={{ color: "#fdd835", marginLeft: "10%" }}
                />{" "}
                {eventDetail.venue}
              </Typography>
            </div>,
          ]}
        />
      </Card>
      <Divider />
      <Typography.Title style={{ marginLeft: "10%" }}>
        Top reviews
      </Typography.Title>
      <Flex gap="20px" wrap="wrap" style={{ marginLeft: "10%" }}>
       {eventReviews.map((eventReview)=>(      
      <Card
        style={{
          width: 400,
          marginLeft: "5%",
          marginBottom:"5%"
        }}
      >
        <Flex style={{ justifyContent: "space-between", marginBottom: 20 }}>
          <Typography>
            <UserOutlined
              style={{
                background: "#999",
                fontSize: "30px",
                borderRadius: "60%",
                color: "white",
                marginRight: "10px",
              }}
            />
            {eventReview?.userId}
          </Typography>
          <Typography>
            <StarFilled style={{ color: "#fdd835", marginRight: 20 }} />
            {eventReview?.rating}/5
          </Typography>
        </Flex>
        <Typography level={3}>{eventReview?.review}</Typography>
      </Card>
      ))}
       </Flex>
    </>
  );
}
