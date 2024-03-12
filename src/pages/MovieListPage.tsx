import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

//components import
import SearchBar from '../components/SearchBar';
import GenreList from '../components/GenreList';
import SortControl from "../components/SortControl";
import MovieTile from "../components/MovieTile";
import MovieDetails from "../components/MovieDetails";
import DialogOpenButton from '../components/DialogOpenButton';

//styles import
import '../styles/MovieListPage.scss';
//helpers import
import {GENRE_LIST} from '../constants'
//types import 
import {MovieData} from '../types'

const MovieListPage = () => {
    const [moviesList, setMoviesList] = useState<MovieData[]>([]);
    const [searchTerm, setSearchTerm] = useState<string | undefined>();
    const [selectedGenre, setSelectedGenre] = useState<string>('All');
    const [selectedSort, setSelectedSort] = useState<string>('realeaseDate');
    const [selectedMovieData, setSelectedMovieData] = useState<MovieData | undefined>();

    useEffect(() => {
        const getMovies = async () => {
            const response = await fetch('http://localhost:4000/movies?limit=15');
            const resData = await response.json();
            setMoviesList(resData.data);
        }
        getMovies()
    }, [])

    const handleSearch = (value: string) => {
        setSearchTerm(value)
    }

    return (
        <>
            <header className="header__container">
                {/* {selectedMovieData 
                    ?
                    <MovieDetails 
                        poster_path={selectedMovieData.poster_path} 
                        title={selectedMovieData.title} 
                        vote_average={selectedMovieData.vote_average} 
                        genres={selectedMovieData.genres} 
                        release_date={selectedMovieData.release_date} 
                        runtime={selectedMovieData.runtime} 
                        overview={selectedMovieData.overview}
                        resetHeader={setSelectedMovieData}
                    /> 
                    :
                    <div className="default-header__container">
                        <div className="add-movie__container">
                            <DialogOpenButton dialogTitle={"Add Movie"} buttonText={"+ ADD MOVIE"}  onDialogFormSubmit={() => {}}/>
                        </div>
                        <div className="searchbar__container">
                            <SearchBar initialValue={searchTerm} onSearch={handleSearch }/>
                        </div>
                    </div>
                } */}

                <Outlet/>
            </header>

            <nav>
                <div className="nav-components__container">
                    <GenreList genresList={GENRE_LIST} selectedGenre={selectedGenre} handleSelectGenre={setSelectedGenre}/>
                    <SortControl selectedSorting={selectedSort} handleSortChange={setSelectedSort}/>
                </div>
                <hr />
            </nav>

            <main>
                <div className="movies-list">
                    <h1>{moviesList.length} movies found</h1>
                    <div className="movies-grid">
                        {
                        moviesList && moviesList.map((movie) => (
                            <MovieTile
                                key={movie.id}
                                movieData={movie}
                                onClick={setSelectedMovieData}
                            />
                        ))
                        }
                    </div>
                </div>
            </main>
        </>

    )
}

export default MovieListPage;
