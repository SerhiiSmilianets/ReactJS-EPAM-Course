import '../styles/GenreList.scss';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

const GenreBtn = ({genre, isSelected, onGenreSelection}) => {
    return (
        <li>
            {/* <NavLink to={`/genre/${genre}`} 
                className={({ isActive }) =>
                isActive ? "genre-item selected" : "genre-item"
            }
            >
                {genre}
            </NavLink> */}
            <button className={"genre-item " + (isSelected ? "selected" : "")} onClick={() => onGenreSelection(genre)} >{genre}</button>
        </li>
    )
}

const GenreList = ({ genresList, selectedGenre, onSelectGenre }) => {
    return (
        <ul className="genre-list-container">
                {
                    genresList.map((genre, index) => (
                        <GenreBtn key={genre + index} genre={genre} isSelected={genre === selectedGenre} onGenreSelection={onSelectGenre}/>
                    ))
                }
        </ul>
    )
}

GenreList.propTypes = {
    genresList: PropTypes.arrayOf(PropTypes.string)
}

GenreList.defaultProps = {
    genresList: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']
}

export default GenreList;
