import { useEffect, useState } from "react"
import { Button } from "antd"
import Movies from "./MovieDetails"
import { getFunction } from "../../../services/movie/movies"
import ArtistDetailPage from "../../artists/ArtistDetailPage"
import { useParams } from "react-router-dom";


const MovieDetailPage=({back,movieId,onSelectArtist})=>{
     console.log(movieId,"mmmmm")
    const[movieDetails,setMovieDetails]=useState(null)
    
    useEffect(()=>{
        Promise.all([getFunction(),
        getFunction(),//artist
        getFunction()//reviews
        ])
        .then((data)=>{
             console.log('promises data',data)
            setMovieDetails({movieDetail:data[0],reviews:data[1],artist:data[2]})
        }).catch(error => {
            console.error('Error fetching data:', error);
        })
    //     getFunction()
    //           .then((data) => {
    //             setMovieDetails(data);
    //           })
        
    },[])
     console.log(movieDetails,"pooja")
     let selectedMovie = null;

     if (movieDetails) {
        selectedMovie = movieDetails.movieDetail.find(movie => movie.movieId == movieId);
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

        }}onClick={back}>Back</Button>
       
        {selectedMovie && <Movies movie={selectedMovie} onSelectArtist={onSelectArtist} />}
        </>
    )
}
//   export default MovieDetailPage

const UI = {
    ArtistDetailPage: 'ArtistDetailPage', // artist detail
    MovieDetailPage: 'MovieDetailPage' // movie Detail
};
const  MovieArtistDetailWrapper=({back,movieId})=>{
    // const params=useParams()
    // let movieId=params.movieId
    
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
            {ui === UI.ArtistDetailPage && <ArtistDetailPage artistId={selectedArtistId}  back={artistBack}/>}
        </>
    );
}

export default MovieArtistDetailWrapper;


