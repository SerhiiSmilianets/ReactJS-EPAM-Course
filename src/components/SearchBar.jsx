import { useRef } from "react";
import '../styles/SearchBar.scss';
import PropTypes from 'prop-types';

const SearchBar = ( {initialValue = "", onSearch}) => {

    const ref = useRef();

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch(ref.current.value)
    }

    return (
        <div className="search-form__container">
            <h2>Find your movie</h2>
            <form onSubmit={handleSearch} id="search-form" data-testid="search-form">
                <input name="searchQuery" defaultValue={initialValue} ref={ref} placeholder="What do you want to watch?"/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

SearchBar.propTypes = {
    initialValue: PropTypes.string
}

SearchBar.defaultProps = {
    initialValue: ''
}

export default SearchBar;
