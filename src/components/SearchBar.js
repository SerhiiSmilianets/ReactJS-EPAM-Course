import React, { useState } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    function onSearch(e) {
        e.preventDefault()
        const form = document.querySelector('#search-form');
        const data = new FormData(form);
        setSearchTerm(data.get("searchQuery"))
    }

    return (
        <>
            <form onSubmit={onSearch} id="search-form">
                <input name="searchQuery"/>
                <button type="submit">Search</button>

                <h1>{searchTerm}</h1>
            </form>
        </>
    );
}

export default SearchBar;
