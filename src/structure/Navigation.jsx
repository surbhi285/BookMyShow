import React from "react"
import Carousels from "../pages/homepage/Carousels"
import LoginInButton from "../pages/login/LoginInButton"
import WrapperMovies from "../pages/movies/WrapperMovies"
import ArtistDetailPage from "../pages/artists/ArtistDetailPage"
import MovieArtistDetailWrapper from "../pages/movies/moviedetails/MovieDetailPage"
import {ContentFile} from "../pages/homepage/ContentFile"
import ParentComponent from "../pages/homepage/ParentComponent"
import EventWrapper from "../pages/events/EventWrapper"
import BookingConfirmed from "../pages/booking/bookingConfirmation/BookingConfirmed"
import CreateBookingPage from "../pages/booking/bookingPage/CreateBookingPage"
import ArtistList from "../pages/artists/ArtistList"
import BookingWrapper from "../pages/booking/BookingWrapper"


//["Home", "Movies", "Events", "Artist", "Shows"]



// export const navList = [
//      { path:     "/",         name: "HeaderFooter",        element: <HeaderFooter />,       isMenu: true,     isPrivate: false  },
//      { path:     "/LoginInButton",    name: "LoginInButton",       element: <LoginInButton />,      isMenu: true,    isPrivate: false  },
//      { path:     "/Carousels",  name: "carousels",     element: <Carousels/>,    isMenu: true,     isPrivate: true  },
    
// ]

export const navList = [
    { path:     "/",         name: "Home",        element: <ParentComponent/>,       isMenu: true,     isPrivate: false  },
    { path:     "/LoginInButton",    name: "LoginInButton",       element: <LoginInButton />,      isMenu: false,    isPrivate: false  }, 
    // { path:     "/parentComponent",    name: "ParentComponent",       element: <ParentComponent/>,      isMenu: false,    isPrivate: false  },
    { path:     "/movies",    name: "Movies",  element: <WrapperMovies/>,      isMenu: true,    isPrivate: false  },
    { path:     "/movie/:movieId",    name: "Movie Details",  element: <MovieArtistDetailWrapper/>,      isMenu: false,    isPrivate: false  },
    { path:     "/events",    name: "Events",  element: <EventWrapper/>,      isMenu: true,    isPrivate: false  },
    { path:     "/artist/:artistId",    name: "Artist",  element: <ArtistDetailPage/>,      isMenu: true,    isPrivate: false  },
    { path:     "/shows",    name: "Shows",    element: <BookingWrapper/>,      isMenu: true,    isPrivate: false  },
    { path:     "/events/booking/event/:id",    name: "Shows",    element: <BookingWrapper/>,      isMenu: false,    isPrivate: false  },
    // { path:     "/bookingConfirmation",    name: "BookingConfirmation",    element: <BookingConfirmed/>,      isMenu: false,    isPrivate: false  },
    // { path:     "/movies/booking/movies/:id",    name: "Shows",    element: <ShowsPage/>,      isMenu: false,    isPrivate: false  },
    //{ path:     "/bookingConfirmation",    name: "BookingConfirmation",    element: <BookingConfirmed/>,      isMenu: false,    isPrivate: false  },
    { path:     "/artist/:artistId",    name: "Artist",  element: <ArtistDetailPage/>,      isMenu: false,    isPrivate: false  },
]