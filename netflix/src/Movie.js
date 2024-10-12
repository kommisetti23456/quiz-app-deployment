 

 
// import React from "react";
// import Axios from "axios";
// import movieTrailer from "movie-trailer";
// import Youtube from "react-youtube";

// function Movie(props) {
//     const [ movies, setMovies] = React.useState([]);
//     const[videos,setVideo]=React.useState("")

//     React.useEffect(() => {
//         Axios.get(props.url)
//             .then(response => {      // Update the state with the fetched data
//                 setMovies(response.data.results);
//             })
//             .catch(error => {
//                 console.error('Error fetching trending movies:', error);
//             });
//     }, []);
//     function collect(movieName){
//         movieTrailer(movieName)
//         .then(function(output){
//          const video=new URLSearchParams(new URL(output).search).get("v")
// setVideo(video)
//         })
//         .catch(function(error){
//             console.log(error)
//         })
//     }

//     return (
//         <div className="movies">
//             <h2>Trending Movies</h2>
            
//             <div className="movie">
//             {
//                 movies.map(movie => (
                    
//                <img onClick={function()
// {
//    collect(movie.title)
//                     }} key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    
//                 ))
            
//             }
//             </div>
//             {videos &&Youtube}
//             <Youtube videoId={videos}/>
//         </div>
//     );
// }

// export default Movie;
import React, { useState, useEffect } from "react";
import Axios from "axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Movie(props) {
    const [movies, setMovies] = useState([]);
    const [videoId, setVideoId] = useState("");

    useEffect(() => {
        Axios.get(props.url)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching trending movies:', error);
            });
    }, [props.url]);

    const collect = (movieName) => {
        movieTrailer(movieName)
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setVideoId(urlParams.get('v'));
            })
            .catch(error => {
                console.log('Error fetching trailer:', error);
            });
    }

    return (
        <div className="movies">
            <h2>Trending Movies</h2>
            <div className="movie">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => collect(movie.title)}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                    />
                ))}
            </div>
            {videoId && <YouTube videoId={videoId} />}
        </div>
    );
}

export default Movie;
