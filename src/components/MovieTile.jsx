import PropTypes from 'prop-types';
import { getReleaseYear } from '../utils/movieUtils';
import '../styles/MovieTile.scss';

const MovieTile = ({poster_path, title, genres, release_date, movieData, onClick}) => {
    return (
        <div className="movie-tile" onClick={() => onClick(movieData)}>
            <img className="movie-tile__image" src={poster_path} alt={title} />
            <div className="movie-tile__header">
                <h4 className="movie-tile__title">{title}</h4>
                <span className="movie-tile__release">{(getReleaseYear(release_date))}</span>
            </div>
            <div className="movie-tile__footer">
                <p className="movie-tile__genres">{(genres || []).join(', ')}</p>
            </div>
        </div>
    )
}

MovieTile.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    onClick: PropTypes.func
}

export default MovieTile
