import PropTypes from 'prop-types';

import '../components-styles/MovieDetails.scss';

const MovieDetails = ({poster_path, title, vote_average, genres, release_date, runtime, overview}) => {
    const getRuntimeFormatted = (runtime) => {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;

        return [hours, 'h',' ', minutes, 'min'].join('')
    }

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
                    <p className="movie-details__genres">{(genres.length === 2 ? genres.join(' & ') : genres.join(', '))}</p>
                </div>

                <div className="movie-details__info-middle">
                    <span>{(new Date(release_date).getFullYear())}</span>
                    <span>{(getRuntimeFormatted(runtime))}</span>
                </div>

                <p className='movie-details__overview'>{overview}</p>
            </div>
        </div>
    )
}

MovieDetails.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
}

export default MovieDetails;
