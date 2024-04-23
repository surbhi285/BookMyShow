import React, { useState } from 'react';
import { Input, Layout, theme } from 'antd';
import WrapperMovies from '../movies/WrapperMovies';
import ArtistList from '../artists/ArtistList';
import LogOutButton from '../login/LogOutButton';
import UserProfile from './UserProfile';
import LoginInButton from '../login/LoginInButton';
import EventWrapper from '../events/EventWrapper';

const { Content } = Layout;

const ContentFile = ({ inputText }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content>
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          backgroundColor: "white"
        }}
      >

        {inputText === "movies" && <WrapperMovies />}
        {inputText === "artist" && <ArtistList />}
        {inputText==="events"&& <EventWrapper/>}
      </div>
    </Content>
  );
};

const SearchBar = ({ setInputText }) => {
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
  const user={name:'Pooja'}
  const isAuthenticated=false

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ marginRight: "70px" }}>
          <img src="assets\logos\logo.png" alt="Logo" style={{ width: 200, height: 60 }} />
        </div>
        <div className="search" style={{ width: "50%", textAlign: "center" }}>
          <Input
            id="outlined-basic"
            variant="outlined"
            onChange={inputHandler}
            fullWidth
            placeholder="Search for movies..."
          />
        </div>
        {/* <div style={{ flex: 0.6, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <UserProfile />
          {isAuthenticated ? (
            <LogOutButton />
          ) : (
            <LoginInButton />
          )}
        </div> */}
        <div style={{
          flex: 0.6,
          minWidth: 0,
          display: 'flex',
          // backgroundColor: "GhostWhite",
          justifyContent: 'flex-end',
          alignItems: 'right',
          marginRight:"50px"

        }}
        >
        <div style={{marginRight:"30px" }}>Gift Cards</div>
        <div style={{marginRight:"30px" }}>Offers</div>
        <div style={{marginRight:"30px" }}>Corporates</div>
        </div>
      </div>

    </>
  );
};


export { SearchBar, ContentFile };


// import React, { useState } from 'react';
// import { Input, Layout,theme } from 'antd';
// import WrapperMovies from '../movies/WrapperMovies';
// import ArtistList from '../artists/ArtistList';
// const { Header, Content, Footer } = Layout;
// const ContentFile = ({inputText}) => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//       <Content>
//         <div
//           style={{
//             padding: 24,
//             minHeight: 380,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//             backgroundColor: "white"
//           }}
//         >
//           {/* <WrapperMovies/> */}
//           <h1>HomePage hai yeh bhai log</h1>
//           {inputText === "movies" && <WrapperMovies />}
//         {inputText==="artist" && <ArtistList/>}
//         </div>
//       </Content>
//   );
// };
// const SearchBar = () => {
//     const [inputText, setInputText] = useState("");
//     let inputHandler = (e) => {
//       var lowerCase = e.target.value.toLowerCase();
//       setInputText(lowerCase);
//     };

//     return (
//         <div className="search">
//             <Input
//                 id="outlined-basic"
//                 variant="outlined"
//                 onChange={inputHandler}
//                 fullWidth
//                 placeholder="Search for movies..."
//             />
//         </div>
//     );
// };

// export { SearchBar, ContentFile };






