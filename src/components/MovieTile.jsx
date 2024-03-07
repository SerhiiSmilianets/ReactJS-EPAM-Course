import { useRef, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { getReleaseYear } from '../utils/movieUtils';
import '../styles/MovieTile.scss';
import DialogOpenButton from '../components/DialogOpenButton';

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

const MovieTile = ({movieData, onClick}) => {
    const [isMenuTileContextOpen, setMenuTileContextOpen] = useState(false);// need to hide/show menu
    const [isMenuTileContextRendered, setMenuTileContextRendered] = useState(false)// need for menu render

    const menuRef = useRef(null);

    const handleTileMenuOpen = () => {
        setMenuTileContextRendered(true)
        setMenuTileContextOpen(true)
    }

    const handleTileClick = (e) => {
        e.stopPropagation()
        if (e.target?.classList.contains("movie-tile__control-btn")) return
        onClick(movieData)
    }

    useOutsideClick(menuRef, setMenuTileContextOpen);

    return (
        <div className="movie-tile__container">
            <div className="movie-tile" id={movieData.id} onClick={handleTileClick}>
                <img className="movie-tile__image" src={movieData.poster_path} alt={movieData.title} />
                <div className="movie-tile__header">
                    <h4 className="movie-tile__title">{movieData.title}</h4>
                    <span className="movie-tile__release">{(getReleaseYear(movieData.release_date))}</span>
                </div>
                <div className="movie-tile__footer">
                    <p className="movie-tile__genres">{(movieData.genres || []).join(', ')}</p>
                </div>

                <button onClick={handleTileMenuOpen} className='movie-tile__control-btn'>&#8942;</button>
            </div>
            {isMenuTileContextRendered &&
                <div className={'movie-tile__context-container ' + (isMenuTileContextOpen ? '' : 'hidden')} ref={menuRef}>
                    <button className="close-context-btn" onClick={() => setMenuTileContextOpen(false)}>&times;</button>
                    <ul className='movie-tile__context-menu'>
                        <li><DialogOpenButton movieData={movieData} dialogTitle={'Edit Movie'} buttonText={'Edit'}/></li>
                        <li><DialogOpenButton isDeleteForm={true} dialogTitle={'Delete Movie'} buttonText={'Delete'}/></li>
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
