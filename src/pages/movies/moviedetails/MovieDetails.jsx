import { Button, Card, Watermark, Row, Col, Divider, Typography, Flex  } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import {
  ArrowLeftOutlined,
  EnvironmentFilled,
  EditOutlined,
  StarFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate} from 'react-router-dom';
const { Text } = Typography;

const Movies = ({ movie,onSelectArtist,review, back, payload, initFormData, updateCount, showModal, setReview }) => {
    // const nav=useNavigate()
    const handleClick=(artistId)=>{
        onSelectArtist(artistId)
    }
    let artistList=[]
        for(const artist of movie.artist){
            artistList.push(artist)
}
const findReview = () => {
    if (review) {
      return review?.filter (
        (review) => review.categoryId === movie.movieId
      );
    }
    return [];
  };
  const movieReviews = findReview();
  
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
       
      </Flex>
            <Card
                // style={{ backgroundColor: "white" }},
                
                style={{ background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${movie.moviePoster})`,

                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                
                 }}
            >
                <Row>
                    <Col span={8}

                        hoverable
                        style={{
                            width: "100%",
                            height: 600,
                        }}
                    >
                        {<img style={{ width: "80%", height: 500,paddingLeft:"30px",paddingTop:"30px" ,zIndex:3}}
                            src={movie.moviePoster}
                            alt={movie.movieName} />}
                        {/* <Meta title={movie.movieName}  description={movie.censorBoardRating} /> */}
                    </Col>
                    <Col span={16}
                        style={{
                            width: "100%",
                            height: 600,
                            textAlign: "left",
                            padding: "50px",
                        }}>
                        <Watermark style={{
                            width: "100%",
                            height: 500,

                        }} content={movie.movieName}>
                            <h1 style={{color:"white",fontSize:"50px"}}>{movie.movieName}</h1>
                            <Button>
                                {movie.languages+" "}{" "}
                                </Button> 
                            <h3 style={{color:"white"}}>
                                {movie.duration}{" "}
                                <br></br>
                                {movie.releaseDate}{" "}
                                <br></br>
                                {movie.genres + " "}
                            </h3>
                            <Link to={`booking/movies/${movie.movieId}`}>
                  
                
                            <Button
                                style={{
                                    size: "large",
                                    backgroundColor: "white",
                                    fontSize: "30px",
                                    color: "black",
                                    width: "200px",
                                    height: "50px",
                                    alignItems: "center",
                                }}
                            >
                                BookTicket
                            </Button>
                            </Link>
                            <Button
                                style={{
                                    size: "large",
                                    backgroundColor: "white",
                                    fontSize: "30px",
                                    color: "black",
                                    width: "200px",
                                    height: "50px",
                                    alignItems: "center",
                                    
                                }}
                                onClick={()=>{initCreateUpdate(); showModal()}}
                            >
                                Add Review
                            </Button>
                        </Watermark>
                    </Col>
                </Row>
            </Card>
            <Card>
                <h1>About the Movie</h1>
                <Text>{movie.movieDetail}</Text>
                </Card>
                <Card>
                <h1>Cast</h1>
                <Row gutter={16}>
                {artistList.map(artist=>(
                    <Col span ={3}>
                    <div  key={artist.artistId}  onClick={()=>{
                        // nav(`/artist/${artist.artistId}`)
                        handleClick(artist.artistId)
                    }}>
                      

                    {<img style={{ width: 130, height: 130,borderRadius:'50%' }}
                    src={artist.image}
                    alt={artist.name} />}
                    <h4>{artist.name}</h4>
                    </div>
                    </Col>
                ))}
                </Row>
                </Card>
                
                {/* <Divider /> */}
      <Typography.Title style={{ marginLeft: "10%" }}>
        Top reviews
      </Typography.Title>
      <Flex gap="20px" wrap="wrap" style={{ marginLeft: "10%" }}>
       {movieReviews.map((movieReview)=>(      
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
            {movieReview?.userId}
          </Typography>
          <Typography>
            <StarFilled style={{ color: "#fdd835", marginRight: 20 }} />
            {movieReview?.rating}/5
          </Typography>
        </Flex>
        <Typography level={3}>{movieReview?.review}</Typography>
      </Card>
      ))}
      </Flex>
        
            
        </>
    );
};

export default Movies;







// import { Button, Card, Watermark, Row, Col } from "antd";
// import Meta from "antd/es/card/Meta";
// import React from "react";
// import { Typography } from 'antd';
// const { Text } = Typography;


// const Movies = ({ movie }) => {
//     let artistList=[]
//     //  console.log(movie, "help");
   
//         for(const artist of movie.artist){
//             artistList.push(artist)
// }
// // console.log(artistList,"shalu")
//     return (
//         <>
//             <Card
//                 // style={{ backgroundColor: "white" }},
                
//                 style={{ background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${movie.moviePoster})`,

//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover',
//                  }}
//             >
//                 <Row>
//                     <Col span={8}

//                         hoverable
//                         style={{
//                             width: "100%",
//                             height: 600,
//                         }}
//                     >
//                         {<img style={{ width: "80%", height: 500,paddingLeft:"30px",paddingTop:"30px" ,zIndex:3}}
//                             src={movie.moviePoster}
//                             alt={movie.movieName} />}
//                         {/* <Meta title={movie.movieName}  description={movie.censorBoardRating} /> */}
//                     </Col>
//                     <Col span={16}
//                         style={{
//                             width: "100%",
//                             height: 600,
//                             textAlign: "left",
//                             padding: "50px",
//                         }}>
//                         <Watermark style={{
//                             width: "100%",
//                             height: 500,

//                         }} content={movie.movieName}>
//                             <h1 style={{color:"white",fontSize:"50px"}}>{movie.movieName}</h1>
//                             <Button>
//                                 {movie.languages+" "}{" "}
//                                 </Button> 
//                             <h3 style={{color:"white"}}>
//                                 {movie.duration}{" "}
//                                 <br></br>
//                                 {movie.releaseDate}{" "}
//                                 <br></br>
//                                 {movie.genres + " "}
//                             </h3>
//                             <Button
//                                 style={{
//                                     size: "large",
//                                     backgroundColor: "white",
//                                     fontSize: "30px",
//                                     color: "black",
//                                     width: "200px",
//                                     height: "50px",
//                                     alignItems: "center",
//                                 }}
//                             >
//                                 BookTicket
//                             </Button>
                            
//                             <Button
//                                 style={{
//                                     size: "large",
//                                     backgroundColor: "white",
//                                     fontSize: "30px",
//                                     color: "black",
//                                     width: "200px",
//                                     height: "50px",
//                                     alignItems: "center",
                                    
//                                 }}
//                             >
//                                 Add Review
//                             </Button>
//                         </Watermark>
//                     </Col>
//                 </Row>
//             </Card>
//             <Card>
//                 <h1>About the Movie</h1>
//                 <Text>{movie.movieDetail}</Text>
//                 </Card>
//                 <Card>
//                 <h1>Cast</h1>
//                 <Row gutter={16}>
//                 {artistList.map(artist=>(
//                     <Col span ={3}>
//                     <div  key={artist.artistId} >
//                         {/* onClick={artistPage} */}

//                     {<img style={{ width: 130, height: 130,borderRadius:'50%' }}
//                     src={artist.image}
//                     alt={artist.name} />}
//                     <h4>{artist.name}</h4>
//                     </div>
//                     </Col>
//                 ))}
//                 </Row>
//                 </Card>
//                 <Card>
//                     <h1>Reviews  </h1>
//                 </Card>
                
            
//         </>
//     );
// };

// export default Movies;























