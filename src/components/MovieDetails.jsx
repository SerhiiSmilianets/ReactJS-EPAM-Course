import { useLoaderData, Link, useLocation } from "react-router-dom";
import { getRuntimeFormatted, getReleaseYear, getMovieItem } from '../utils/movieUtils';
import {MOVIE_API_URL} from '../constants'

import '../styles/MovieDetails.scss';

const MovieDetails = () => {
    const {poster_path, title, vote_average, genres, release_date, runtime, overview} = useLoaderData();
    const location = useLocation();

    return (
        <div className="movie-details__container">
            <div className="movie-details__poster">
                <img className="movie-details__image" src={poster_path} alt={title} />
            </div>
            <div className="movie-details__info">
                <div className="movie-details__info-header">
                    <h1 className="movie-details__title">{title}</h1>
                    <span className="movie-details__rating">{vote_average}</span>
                </div>

                <div className="movie-details__genres-container">
                    <p className="movie-details__genres">{(genres ? genres.length === 2 ? genres.join(' & ') : genres.join(', ') : "")}</p>
                </div>

                <div className="movie-details__info-middle">
                    <span>{(getReleaseYear(release_date))}</span>
                    <span>{(getRuntimeFormatted(runtime))}</span>
                </div>

                <p className='movie-details__overview'>{overview}</p>
            </div>
            <Link to={`/${location.search}`} className="reset-header-btn"> &#x1F50E;&#xFE0E;</Link>
        </div>
    )
}

export default MovieDetails;

export async function loader({ params}) {
    return await getMovieItem([MOVIE_API_URL, params.movieId].join('/'))
}
