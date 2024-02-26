import React, { useState } from "react";
import PropTypes from 'prop-types';

const SearchBar = ( {initialValue}) => {
    const [searchTerm, setSearchTerm] = useState(initialValue);

    function onSearch(e) {
        e.preventDefault()
        const form = document.querySelector('#search-form');
        const data = new FormData(form);
        setSearchTerm(data.get("searchQuery"))
    }

    return (
        <>
            <form onSubmit={onSearch} id="search-form" data-testid="search-form">
                <input name="searchQuery" defaultValue={initialValue}/>
                <button type="submit">Search</button>

                <h1>{searchTerm}</h1>
            </form>
        </>
    );
}

SearchBar.propTypes = {
    initialValue: PropTypes.string
}

SearchBar.defaultProps = {
    initialValue: ''
}

export default SearchBar;
