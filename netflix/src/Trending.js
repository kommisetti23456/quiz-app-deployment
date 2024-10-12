 
import React from "react";
import Axios from "axios";

function Trending() {
    const [trendings, setTrendings] = React.useState([]);

    React.useEffect(() => {
        Axios.get(
          "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=127e0be4c052bb0d93f19cd823c1d863")
            .then(response => {      // Update the state with the fetched data
                setTrendings(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching trending movies:', error);
            });
    }, []);

    return (
        <div className="movies">
            <h2>Trending Movies</h2>
            <div className="movie">
            {
                trendings.map(movie => (
                    <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                ))
            }
            </div>
        </div>
    );
}

export default Trending;
