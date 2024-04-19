import React from "react";
//import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  //const { user, isAuthenticated, isLoading } = useAuth0();

  const user={name:"Pooja"}
  const isAuthenticated=false
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  return (
    isAuthenticated && (
      <div>
        {/* <img stryle={{border:"white"}}src={user.picture} alt={user.name} /> */}
        <h4 style={{color:"grey",marginRight:"20px"}}>{user.name}</h4>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default UserProfile;