import { useRef } from "react";
import PropTypes from 'prop-types';

const SearchBar = ( {initialValue = "", onSearch}) => {

    const ref = useRef();

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch(ref.current.value)
    }

    return (
        <form onSubmit={handleSearch} id="search-form" data-testid="search-form">
            <input name="searchQuery" defaultValue={initialValue} ref={ref}/>
            <button type="submit">Search</button>
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
