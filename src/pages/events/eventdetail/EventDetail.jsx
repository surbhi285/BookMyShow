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

export default function EventDetail({
  eventDetail,
  onSelectArtist,
  review,
  back,
  payload,
  initFormData,
  showModal,
}) {

  let artistList = eventDetail.artist?eventDetail.artist: null;


  const findReview = () => {
    if (review) {
      return review?.filter(
        (review) => review.categoryId === eventDetail.eventId
      );
    }
    return [];
  };
  const eventReviews = findReview();

  const initCreateUpdate = () => {
    payload.current.operation = "ADD";
    payload.current.data = {};
    initFormData();
  };
  console.log("payload", payload.current.data);

  return (
    <>
      <Flex style={{ justifyContent: "space-between", marginBottom: "10px" }}>
        <Button
          style={{
            marginTop: "5px",
            marginLeft: "10px",
            color: "rgb(220, 53, 75)",
          }}
          onClick={back}
        >
          <ArrowLeftOutlined />
          Back
        </Button>
        <Button
          style={{
            color: "rgb(220, 53, 75)",
            border: "none",
            fontSize: "16px",
          }}
          onClick={() => {
            initCreateUpdate();
            showModal();
          }}
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
              <Typography.Title
                style={{ margin: 0, padding: 0, color: "black" }}
              >
                {eventDetail.eventName}
              </Typography.Title>
              <Flex gap="large">
                <Typography
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginBottom: 0,
                    width: "100%",
                  }}
                >
                  {eventDetail.genres.join(", ")} |{" "}
                  {eventDetail.language.join(", ")} |{" "}
                  {eventDetail.censorBoardRating} | {eventDetail.duration}
                </Typography>
                <Link to={`booking/event/${eventDetail.eventId}`}>
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: "rgb(220, 53, 75)",
                      width: "120px",
                      height: "50px",
                      marginTop: 0,
                      fontSize: "16px",
                    }}
                  >
                    BOOK
                  </Button>
                </Link>
              </Flex>
              <Divider />
              <Typography style={{ fontSize: "18px", color: "black" }}>
                {eventDetail?.date?.length <= 1
                  ? eventDetail?.date[0]
                  : `${eventDetail?.date[0]} - ${
                      eventDetail?.date[eventDetail?.date?.length - 1]
                    }`}{" "}
                {eventDetail.eventTime} onwards
                <EnvironmentFilled
                  style={{ color: "#fdd835", marginLeft: "10%" }}
                />{" "}
                {eventDetail.venue}
              </Typography>
            </div>
          ]}
        />
      </Card>
      <Divider />
      <Card>
        <Typography.Title style={{ paddingLeft: "10%" }}>Cast</Typography.Title>
        {artistList?.map((artist) => (
          <div onClick={() => onSelectArtist(artist?.artistId)}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 8,
                paddingLeft: "20%",
              }}
            >
              <img
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  marginRight: 50,
                }}
                src={artist.image}
                alt={artist.name}
              />
              <div>
                <Typography.Title level={2}>{artist?.name}</Typography.Title>
                {artist?.role.map((role, index) => (
                  <Typography.Title
                    level={4}
                    key={index}
                    style={{ margin: "5px 2px" }}
                  >
                    {role}
                  </Typography.Title>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Card>

      <Divider />
      <Typography.Title style={{ marginLeft: "10%" }}>
        Top reviews
      </Typography.Title>
      <Flex gap="20px" wrap="wrap" style={{ marginLeft: "10%" }}>
        {eventReviews.map((eventReview) => (
          <Card
            style={{
              width: 400,
              marginLeft: "5%",
              marginBottom: "5%",
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
