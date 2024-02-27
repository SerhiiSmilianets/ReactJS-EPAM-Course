import React, { useState, useEffect } from "react";
import MovieTile from "./MovieTile";
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
            <h1>{moviesList.length} movies found</h1>
            <div className="movies-grid">

                {
                    moviesList.map((movie) => (
                        <MovieTile movieData={movie} onClick="" key={movie.id}/>
                    ))
                }

            </div>
        </div>
    )
}

export default MoviesList
