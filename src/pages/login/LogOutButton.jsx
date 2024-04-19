import React from "react";
//import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd"
const LogOutButton = () => {
  //const { logout } = useAuth0();

  return (
    <Button style={{backgroundColor:"red",color:"black"}} 
    //onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
      Log Out
    </Button>
  );
};

export default LogOutButton;