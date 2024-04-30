import React from "react";
import { Button, Card, Divider, Typography, Flex, Row, Col } from "antd";
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
  console.log(artistList)


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
        <Row gutter={16} style={{marginLeft:"12%"}}>
                {artistList?.map(artist=>(
                    <Col span ={4} style={{marginRight:"5%"}}>
                    <div  key={artist.artistId}  onClick={()=> onSelectArtist(artist?.artistId)}>
                    {<img style={{ width: 150, height: 150,borderRadius:'50%' }}
                    src={artist.image}
                    alt={artist.name} 
                    />}
                    <Typography.Title level={4} style={{marginLeft:"10%"}}>{artist.name}</Typography.Title>
                    </div>
                    </Col>
                ))}
                </Row>
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