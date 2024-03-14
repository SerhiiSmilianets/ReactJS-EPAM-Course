import {Outlet, useLoaderData } from "react-router-dom";

//components import
import GenreList from '../components/GenreList';
import SortControl from "../components/SortControl";
import MovieTile from "../components/MovieTile";

//styles import
import '../styles/MovieListPage.scss';

//helpers import
import {GENRE_LIST, MOVIE_API_URL} from '../constants'
import { getMoviesList } from '../utils/movieUtils';

//types import
import {MovieData} from '../types'

interface LoaderData {
    data: MovieData[]
}

const MovieListPage = () => {
    const moviesList = useLoaderData() as MovieData[];

    return (
        <>
            <header className="header__container">
                <Outlet/>
            </header>

            <nav>
                <div className="nav-components__container">
                    <GenreList genresList={GENRE_LIST} />
                    <SortControl />
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

interface LoaderProps {
    request: Request;
}

export async function loader({request}: LoaderProps): Promise<LoaderData> {
    const url = new URL(request.url)
    const params = new URLSearchParams(url.search);
    const sortBy = params.get("sortBy");
    let additionalQueryParameters = url.search ? '&searchBy=title&limit=100&sortOrder=asc' : '?searchBy=title&limit=100&sortOrder=asc';
    if (!sortBy) {
        additionalQueryParameters = [additionalQueryParameters, "sortBy=release_date"].join('&')
    }
    return await getMoviesList([MOVIE_API_URL, url.search, additionalQueryParameters].join(''));
}
