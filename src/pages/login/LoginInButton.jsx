import React from "react";
import { Button } from "antd"
import { useLocation, useNavigate } from "react-router";
const LoginInButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, "surbhi dii")
  //console.log(location,)
  return <Button style={{ backgroundColor: "red", color: "black" }} onClick={() => {
    // if (location.state?.from) {
    //   navigate(location.state.from);
    // }
    const { pathname } = location;
    
  }}>Log In</Button>;
};

export default LoginInButton;