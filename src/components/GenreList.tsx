import { FC } from 'react';
import '../styles/GenreList.scss';
import { useSearchParams } from 'react-router-dom';

interface GenreBtnProps {
  genre: string;
  selectedGenre: string;
  handleGenreSelection: (genre: string) => void;
}

const GenreBtn: FC<GenreBtnProps> = ({genre, selectedGenre, handleGenreSelection}) => {
    return (
        <li>
            <button className={"genre-item " + (selectedGenre === genre ? "selected" : "")} onClick={() => handleGenreSelection(genre)} >{genre}</button>
        </li>
    )
}

interface GenreListProps {
  genresList: string[];
}

const GenreList: FC<GenreListProps> = ({ genresList = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'] }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSelectGenre = (genre: string) => {
        const queryObj: any = {};
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
                        <GenreBtn key={genre + index} genre={genre} selectedGenre={searchParams.get('filter') || "All"}  handleGenreSelection={handleSelectGenre}/>
                    ))
                }
        </ul>
    )
}

export default GenreList;
