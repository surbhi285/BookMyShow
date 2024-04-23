import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import WrapperMovies from '../movies/WrapperMovies';
import LoginButton from '../login/LoginInButton';
import LogOutButton from '../login/LogOutButton';
import UserProfile from './UserProfile';
import { useNavigate, useLocation } from 'react-router-dom';
import { navList } from '../../structure/Navigation';
import { SearchBar } from './ContentFile';
import ParentComponent from './SearchBar';


// import { RenderMenuArray } from '../../structure/RenderNavigation';

// import ShowBooking from 'assets/logos/ShowBooking.png';
const { Header, Content, Footer } = Layout;
const labels = ["Home", "Movies", "Events", "Artist", "Shows"];
// const items = new Array(labels.length).fill(null).map((_, index) => ({
//   key: String(index + 1),
//   label: labels[index],
// }));

const HeaderFooter = () => {
  //const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const user = { name: 'Pooja' }
  const isAuthenticated = false
  //const { user, loginWithRedirect, isAuthenticated, logout, getAccessTokenSilently } = useAuth0();

  const nav = useNavigate()
  const location = useLocation();

  // const [userMetadata, setUserMetadata] = useState(null);
  // useEffect(() => {
  //   const getUserMetadata = async () => {
  //     const domain = "dev-82dd5fxqg260jbt1.us.auth0.com";

  //     try {
  //       const accessToken = await getAccessTokenSilently({
  //         authorizationParams: {
  //           audience: `https://${domain}/api/v2/`,
  //           scope: "read:current_user",
  //         },
  //       });

  //       const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

  //       const metadataResponse = await fetch(userDetailsByIdUrl, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });

  //       const { user_metadata } = await metadataResponse.json();

  //       console.log('user meta data', user_metadata)

  //       //setUserMetadata(user_metadata);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };

  //   getUserMetadata();
  // }, [getAccessTokenSilently, user?.sub]);


  console.log('location from state', user, location.state?.from)

  const items = navList.map((r, i) => {
    if (!r.isPrivate && r.isMenu) {
      return { key: r.path, label: r.name }

    } else if (isAuthenticated && r.isMenu) {
      return { key: r.path, label: r.name }

    } else return false
  })

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigateUrl = (e) => {
    console.log('click ', e);
    nav(e.key)
    //setCurrent(e.key);
  };

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: "GhostWhite",

        }}
      >
        {/* <img src="assets\logos\logo.png" alt="Logo" style={{ width: 200, height: 60 }} /> */}
        {/* <div className="demo-logo" /> */}
        <Menu
          // theme="dark"
          onClick={navigateUrl}
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 0.5,
            minWidth: 0,
            backgroundColor: "GhostWhite",
            marginLeft: "90px"

          }}
        />
        {/* <div style={{ flex: 0.5, display: 'flex', alignItems: 'center' }}> */}
        {/* <Input placeholder="movies,events,artist,shows " /> */}
        {/* <ParentComponent/> */}


        {/* </div> */}
        <div style={{ flex: 0.6, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <UserProfile />
          {isAuthenticated ? (
            <LogOutButton />
          ) : (
            <LoginButton />
          )}
        </div>
        
      </Header>
    </Layout>
  );
};
export default HeaderFooter;