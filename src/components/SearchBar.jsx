import React, { useState, useRef } from "react";
import PropTypes from 'prop-types';

const SearchBar = ( {initialValue}) => {
    const [searchTerm, setSearchTerm] = useState(initialValue);
    const ref = useRef();

    function onSearch(e) {
        e.preventDefault()
        setSearchTerm(ref.current.value)
    }

    return (
        <form onSubmit={onSearch} id="search-form" data-testid="search-form">
            <input name="searchQuery" defaultValue={initialValue} ref={ref}/>
            <button type="submit">Search</button>

            <h1>{searchTerm}</h1>
        </form>
    );
}

SearchBar.propTypes = {
    initialValue: PropTypes.string
}

SearchBar.defaultProps = {
    initialValue: ''
}

export default SearchBar;
