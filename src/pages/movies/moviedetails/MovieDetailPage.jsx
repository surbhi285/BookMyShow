import { useEffect, useRef, useState } from "react"
import { Button, Form } from "antd"
import Movies from "./MovieDetails"
import { getFunction } from "../../../services/movie/movies"
import ArtistDetailPage from "../../artists/ArtistDetailPage"
import { useParams } from "react-router-dom";
import { getReviewFunction } from "../../../services/review/review"
import Reviews from "../../reviews/Reviews"


const MovieDetailPage = ({ back, movieId, onSelectArtist }) => {
    const [movieDetails, setMovieDetails] = useState(null)
    const [review, setReview] = useState(null);
    const [updatedCount, setUpdatedCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        getReviewFunction().then((data) => {
            setReview(data);
        });
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const payload = useRef({
        operation: "",
        data: {},
    });
    const initFormData = () => {
        if (payload.current.data) {
            form.setFieldsValue(payload.current.data);
        } else {
            form.resetFields();
        }
    };
    // console.log("data", payload.current.data)
    // console.log(review);


    useEffect(() => {
        Promise.all([getFunction(),
        getFunction(),//artist
        getFunction()//reviews
        ])
            .then((data) => {
                console.log('promises data', data)
                setMovieDetails({ movieDetail: data[0], reviews: data[1], artist: data[2] })
            }).catch(error => {
                console.error('Error fetching data:', error);
            })
        //     getFunction()
        //           .then((data) => {
        //             setMovieDetails(data);
        //           })

<<<<<<< HEAD
    }, [])
    console.log(movieDetails, "pooja")
    let selectedMovie = null;


    if (movieDetails) {
        selectedMovie = movieDetails.movieDetail.find(movie => movie.movieId == movieId);
    }
=======
     if (movieDetails) {
        selectedMovie = movieDetails.movieDetail.find(movie => movie.movieId === movieId);
     }
    
    return(
        <>
        <Button style={{
          
            fontSize: '20px',
            color:"black",
             backgroundColor:"red",
            width:'60px',
            height:'40px',
            alignItems:'center'
>>>>>>> 90ef61c41a9e842fcb8729d2aaa5a18850672739

    return (
        <>
            <Reviews
                form={form}
                payload={payload}
                setUpdatedCount={setUpdatedCount}
                handleOk={handleOk}
                handleCancel={handleCancel}
                isModalOpen={isModalOpen}
                setReview={setReview}
            />
            {selectedMovie &&
                <Movies
                    movie={selectedMovie}
                    onSelectArtist={onSelectArtist}
                    back={back}
                    review={review}
                    payload={payload}
                    initFormData={initFormData}
                    updatedCount={updatedCount}
                    showModal={showModal}
                    setReview={setReview}
                />}
        </>
    )
}
//   export default MovieDetailPage






const UI = {
    ArtistDetailPage: 'ArtistDetailPage', 
    MovieDetailPage: 'MovieDetailPage' 
};
<<<<<<< HEAD
const MovieArtistDetailWrapper = ({ back, movieId }) => {
    // const params=useParams()
    // let movieId=params.movieId

=======
const  MovieArtistDetailWrapper=({back,movieId})=>{   
    
>>>>>>> 90ef61c41a9e842fcb8729d2aaa5a18850672739
    const [ui, setUI] = useState(UI.MovieDetailPage);
    const [selectedArtistId, setSelectedArtistId] = useState(null);
    const handleSelectArtist = (artistId) => {
        setSelectedArtistId(artistId);
        setUI(UI.ArtistDetailPage);
    };

    const artistBack = () => {
        setSelectedArtistId(null);
        setUI(UI.MovieDetailPage);
    };

    return (
        <>
            {ui === UI.MovieDetailPage && <MovieDetailPage onSelectArtist={handleSelectArtist} back={back} movieId={movieId} />}
            {ui === UI.ArtistDetailPage && <ArtistDetailPage artistId={selectedArtistId} back={artistBack} />}
        </>
    );
}

export default MovieArtistDetailWrapper;


