 
import React from "react";
import Movie from "./Movie";

function App() {
  return (
    <div>
      <Movie
        url="https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=127e0be4c052bb0d93f19cd823c1d863"
        heading="Trending Movies"
      />
      <Movie
        url="https://api.themoviedb.org/3/discover/movie?api_key=127e0be4c052bb0d93f19cd823c1d863&language=en-US&sort_by=vote_average.desc&with_genres=35"
        heading="Comedy Movies"
      />
      <Movie
        url="https://api.themoviedb.org/3/discover/movie?api_key=127e0be4c052bb0d93f19cd823c1d863&language=en-US&sort_by=vote_average.desc&with_genres=28"
        heading="Action Movies"
      />
      <Movie
        url="https://api.themoviedb.org/3/discover/movie?api_key=127e0be4c052bb0d93f19cd823c1d863&language=en-US&sort_by=vote_average.desc&with_genres=27"
        heading="Horror Movies"
      />
      <Movie 
      url="https://api.themoviedb.org/3/movie/top_rated?api_key=127e0be4c052bb0d93f19cd823c1d863&language=en-US&page=1"/>
"
    </div>
  );
}

export default App;
