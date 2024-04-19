import { Typography, Button, Flex } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function BookingConfirmed() {
  return (
    <>
    <Link to="/" >
      <Button className="backButton">
        <ArrowLeftOutlined />
        Back
      </Button>
      </Link>
      <Flex
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/originals/e5/83/3e/e5833e1bea7d379f0f4e4ae250b7cf81.gif")',
            height:500
        }}
      >
        <Typography.Title
          style={{
            paddingLeft: "25%",
            paddingTop: "10%",
            color: "rgb(220, 53, 75)",
            fontStyle:"italic"
          }}
        >
          CONGRATULATIONS! BOOKING IS DONE
        </Typography.Title>
      </Flex>
    </>
  );
}
