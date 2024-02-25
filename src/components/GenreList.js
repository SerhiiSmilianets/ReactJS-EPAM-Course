
import React, { useState } from "react";
import '../components-styles/GenreList.scss';

const GenreBtn = ({genre, isSelected, onGenreSelection}) => {
    return (
        <li>
            <button className={"genre-item " + (isSelected ? "selected" : "")} onClick={() => onGenreSelection(genre)} >{genre} {isSelected}</button>
        </li>
    )
}

const GenreList = () => {
    const [selectedGenre, setSelectedGenre] = useState('');

    const genresList = ["All", "Documentary", "Comedy", "Horror", "Crime"];

    function onSelect(genre) {
        setSelectedGenre(genre)
    }

    return (
        <>
            <ul className="genre-list-container">
                    {
                        genresList.map((genre, index) => {
                            return <GenreBtn key={genre + index} genre={genre} isSelected={genre === selectedGenre} onGenreSelection={onSelect}/>
                        })
                    }
            </ul>

        </>
    )
}

export default GenreList;
