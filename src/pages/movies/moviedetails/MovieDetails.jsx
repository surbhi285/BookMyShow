import { Button, Card, Watermark, Row, Col } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Typography } from 'antd';
import { useNavigate} from 'react-router-dom';
const { Text } = Typography;


const Movies = ({ movie,onSelectArtist }) => {
    // const nav=useNavigate()
    
    const handleClick=(artistId)=>{
        // console.log(artistId,"anushkha dii")
        onSelectArtist(artistId)
    }
    let artistList=[]
    //  console.log(movie, "help");
   
        for(const artist of movie.artist){
            artistList.push(artist)
}
// console.log(artistList,"shalu")
    return (
        <>
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
                <Card>
                    <h1>Reviews  </h1>
                </Card>
                
            
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























