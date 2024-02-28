import PropTypes from 'prop-types';

import '../components-styles/MovieTile.scss';

const MovieTile = ({poster_path, title, genres, release_date, onClick}) => {
    const handleClickEvent = (e) => {
        if (typeof onClick === "function") {
            onClick(e.currentTarget.value)
        }
    }
    
    return (
        <div className="movie-tile" onClick={handleClickEvent}>
            <img className="movie-tile__image" src={poster_path} alt={title} />
            <div className="movie-tile__header">
                <h4 className="movie-tile__title">{title}</h4>
                <span className="movie-tile__release">{(new Date(release_date).getFullYear())}</span>
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
