import '../styles/GenreList.scss';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

const GenreBtn = ({genre, selectedGenre, onGenreSelection}) => {
    return (
        <li>
            <button className={"genre-item " + (selectedGenre === genre ? "selected" : "")} onClick={() => onGenreSelection(genre)} >{genre}</button>
        </li>
    )
}

const GenreList = ({ genresList }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSelectGenre = (genre) => {
        const queryObj = {};
        for (const key of searchParams.keys()) {
            if  (key !== "filter") {
                queryObj[key] = searchParams.get(key);
            }
        }

        if (genre === "All") {
            setSearchParams({...queryObj})
        } else {
            setSearchParams({...queryObj, filter: genre})
        }
    }

    return (
        <ul className="genre-list-container">
                {
                    genresList.map((genre, index) => (
                        <GenreBtn key={genre + index} genre={genre} selectedGenre={searchParams.get('filter') ?  searchParams.get('filter') : "All"} onGenreSelection={handleSelectGenre}/>
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
