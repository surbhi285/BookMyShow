
import React, { useEffect, useState } from "react";
import { getFunction } from "../../../services/movie/movies";
import { Card, Col, Row, Space,Button,Modal, Flex } from "antd";
import Meta from "antd/es/card/Meta";

import { useNavigate} from 'react-router-dom';
import {
    EditOutlined,
    DeleteOutlined,
    ExclamationCircleFilled,
    PlusOutlined,
  } from "@ant-design/icons";

const filterMovies = (movies, searchObj) => {
    return movies.filter((movie) => {
        if (!searchObj || ((!searchObj.genre || movie.genres.includes(searchObj.genre)) && (!searchObj.language || movie.languages.includes(searchObj.language))))
            return true;
        return false
    })
};

const Movies = ({
    payload,
    initFormData,
    updatedCount,
    showModal,onSelectMovie, searchObj, listUpdatedCount }) => {
    
    const [movies, setMovies] = useState(null);
    const [filteredMovies, setFilteredMovies] = useState(null);
    const showDeleteConfirm = () => {
        Modal.confirm({
          title: "Are you sure delete this task?",
          icon: <ExclamationCircleFilled />,
          okText: "Yes",
          cancelText: "No",
          onOk() {
            console.log("OK");
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      };
    useEffect(() => {
        getFunction().then((movies) => {
            setMovies(movies)
        })
    }, [listUpdatedCount]);

    useEffect(() => {
        if (searchObj && movies) {
            let filteredMovies = filterMovies(movies, searchObj);
            console.log("f1", filteredMovies);
            setFilteredMovies(filteredMovies);
        }
    }, [movies, searchObj]);

    const handleMovieClick = (movieId) => {
        onSelectMovie(movieId); 
    };

    const initCreateUpdate = (id) => {
        if (id === undefined) {
          payload.current.operation = "ADD";
          payload.current.data = {};
          setMovies([...movies, payload.current.data]);
        } else {
          payload.current.operation = "UPDATE";
          payload.current.data.movieId = id;
          console.log(payload.current.data.movieId)
        }
        console.log("id", id)
          const movieObj = movies?.find(
            (movie) => movie.movieId === id
          );
    
          payload.current.data = movieObj;
          console.log(payload.current.data)
          initFormData();
          console.log(movieObj);
      };
    return (
        <>
          <Button
        className="addButton"
        style={{ marginBottom: "20px", marginLeft: "80%", width: "15%", marginTop:0 }}
        onClick={() => { initCreateUpdate(); showModal()}}
      > 
        Add Movies
      </Button>
            <Row gutter={16} >
          
                    {filteredMovies && filteredMovies.map((movie, index) => (
                        <Col span={6}>
                              <Space size="small">
                        <Movie   
                index={movie.movieId} 
                showDeleteConfirm={showDeleteConfirm}
                initCreateUpdate={initCreateUpdate}
                showModal={showModal}   key={movie.movieId} movie={movie}  handleMovieClick={handleMovieClick} style={{
                                                    width: 300,
                                                     height: 400,
                                                    backgroundColor: "white",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flexDirection: "column",
                            
                                                }}/>
                                                   </Space>
                                                  </Col>
                    ))}
                  
                {/* </Space> */}
            </Row>
        </>
    )
};

const Movie = ({ movie, index, handleMovieClick,
     showDeleteConfirm, initCreateUpdate, showModal }) => {
    const nav=useNavigate()
    const handleClick = () => {
        handleMovieClick(movie.movieId);
      };
    return (
        <>
        <Card
        key={movie.movieId}
        onClick={handleClick}
            hoverable
            style={{ width: 240 ,height:350,marginTop:"50px"}}
            cover={<img style={{ height: 240 }} src={movie.moviePoster} alt="Movie Poster" />}
            // onClick={() => {
                //handleMovieClick(movie.movieId)
                // nav(`/movie/${movie.movieId}`)
            // }
        // } 
            
        >
            <Meta title={movie.movieName} description={movie.genres?.join(", ")} />
           
        </Card>
        <Card style={{margin:0, width:240, height: 50, marginBottom:50}}>
      <Flex style={{justifyContent:"space-between"}}>
      <EditOutlined key="edit" onClick={()=>{initCreateUpdate(movie.movieId); showModal()}}/>
      <DeleteOutlined key="delete" onClick={showDeleteConfirm} />
      </Flex>
      </Card>
       
        </>
    )
}

export default Movies;












// // // import { useEffect, useState } from "react";
// // // import { getFunction } from "../../../services/movie/movies";


// // // const filterMovies = (movies, searchObj) => {
// // //     console.log("Inside Use effect 2-filtering")
// // //     return movies.filter((movie) => {
// // //         if (!searchObj || ((!searchObj.genre || movie.Genres.includes(searchObj.genre)) && (!searchObj.language || movie.Language.includes(searchObj.language))))
// // //             return true;
// // //         return false
// // //     })
// // // };

// // // const Movies = ({ searchObj, listUpdatedCount }) => {
// // //     const [movies, setMovies] = useState(null);
// // //     const [filteredMovies, setFilteredMovies] = useState(null);
// // //     console.log(searchObj);
// // //     console.log("insideMovies Component 1");
// // //     useEffect(() => {
// // //         console.log("Inside Use effect 1-1")
// // //         getFunction().then((movies) => {
// // //             console.log("Inside Use effect 1-get Promise")
// // //             setMovies(movies)
// // //         })
// // //         console.log(movies)
// // //         console.log("Inside Use effect 1-2")
// // //     }, [listUpdatedCount]);
// // //     useEffect(() => {
// // //         console.log("Inside Use effect 2-1")
// // //         if (searchObj && movies) {
// // //             let filteredMovies = filterMovies(movies, searchObj);
// // //             console.log("f1", filteredMovies);
// // //             setFilteredMovies(filteredMovies);
// // //         }
// // //         console.log("Inside Use effect 2-2")
// // //     }, [movies, searchObj]);
// // //     console.log("Inside Movies Component 2")
// // //     return (
// // //         <>
// // //             {filteredMovies && filteredMovies.map((movie, index) => (
// // //                 <Movie key={movie.movieId} movie={movie} index={index} />
// // //             ))}
// // //         </>
// // //     )
// // // };



// // // const Movie = ({ movie, index }) => {
// // //     return (
// // //         <>
// // //             <h1>{movie.movieName}</h1>
// // //             <img src={movie.moviePoster} alt="Movie Poster" />
// // //             <h3>{movie.genres }</h3>
// // //         </>
// // //     )
// // // }
// // // export default Movies;



