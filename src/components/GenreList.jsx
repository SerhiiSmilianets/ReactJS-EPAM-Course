import '../styles/GenreList.scss';
import PropTypes from 'prop-types';

const GenreBtn = ({genre, isSelected, onGenreSelection}) => {
    return (
        <li>
            <button className={"genre-item " + (isSelected ? "selected" : "")} onClick={() => onGenreSelection(genre)} >{genre} {isSelected}</button>
        </li>
    )
}

const GenreList = ({ genresList, selectedGenre, handleSelectGenre }) => {
    return (
        <ul className="genre-list-container">
                {
                    genresList.map((genre, index) => (
                        <GenreBtn key={genre + index} genre={genre} isSelected={genre === selectedGenre} onGenreSelection={handleSelectGenre}/>
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
