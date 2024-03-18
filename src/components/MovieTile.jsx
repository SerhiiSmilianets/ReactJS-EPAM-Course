import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { getReleaseYear, addImageFallback } from '../utils/movieUtils';
import '../styles/MovieTile.scss';

const useOutsideClick = (menuRef, setMenuTileContextOpen) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuTileContextOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {

            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, setMenuTileContextOpen]);
}

const MovieTile = ({movieData}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);// need to hide/show menu
    const [isMenuTileContextRendered, setMenuTileContextRendered] = useState(false)// need for menu render
    const location = useLocation();

    const menuRef = useRef(null);

    const handleTileMenuOpen = () => {
        setMenuTileContextRendered(true)
        setIsMenuOpen(true)
    }

    useOutsideClick(menuRef, setIsMenuOpen);

    return (
        <div className="movie-tile__container">
            <Link to={`/${movieData.id + location.search}`} className="movie-tile" id={movieData.id}>
                <img className="movie-tile__image"  src={movieData.poster_path} alt={movieData.title} onError={addImageFallback}/>
                <div className="movie-tile__header">
                    <h4 className="movie-tile__title">{movieData.title}</h4>
                    <span className="movie-tile__release">{(getReleaseYear(movieData.release_date))}</span>
                </div>
                <div className="movie-tile__footer">
                    <p className="movie-tile__genres">{(movieData.genres || []).join(', ')}</p>
                </div>
            </Link>

            <button onClick={handleTileMenuOpen} className='movie-tile__control-btn'>&#8942;</button>
            
            {isMenuTileContextRendered &&
                <div className={'movie-tile__context-container ' + (isMenuOpen ? '' : 'hidden')} ref={menuRef}>
                    <button className="close-context-btn" onClick={() => setIsMenuOpen(false)}>&times;</button>
                    <ul className='movie-tile__context-menu'>
                        <li><Link to={`/${movieData.id}/edit${location.search}`} className="dialog-open-btn">Edit</Link></li>
                        <li><Link to={`/${movieData.id}/delete${location.search}`} className="dialog-open-btn">Delete</Link></li>
                    </ul>
                </div>
            }
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
