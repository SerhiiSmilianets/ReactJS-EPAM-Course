import React, { useState, useEffect } from "react";
import MovieTile from "./MovieTile";
import MovieDetails from "./MovieDetails";
import SortControl from "./SortControl";
import '../components-styles/MoviesList.scss';

const MoviesList = () => {
    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const response = await fetch('http://localhost:4000/movies');
            const resData = await response.json();
            console.log(resData.data)
            setMoviesList(resData.data);
        }
        getMovies()
    }, [])

    return (
        <div className="movies-list">
<SortControl onChange={(param) => console.log(param)}/>

{ moviesList.length && 
    <MovieDetails 
        poster_path={moviesList[0].poster_path} 
        title={moviesList[0].title} 
        vote_average={moviesList[0].vote_average} 
        genres={moviesList[0].genres} 
        release_date={moviesList[0].release_date} 
        runtime={moviesList[0].runtime} 
        overview={moviesList[0].overview}
    />}


            <h1>{moviesList.length} movies found</h1>
            <div className="movies-grid">
                {
                    moviesList && moviesList.map((movie) => (
                            <MovieTile 
                                key={movie.id}
                                poster_path={movie.poster_path} 
                                title={movie.title} 
                                genres={movie.genres} 
                                release_date={movie.release_date} 
                                onClick="" 
                            />
                    ))
                }
            </div>
        </div>
    )
}

export default MoviesList
