import { useRef } from "react";
import { useSearchParams, Form } from 'react-router-dom';
import '../styles/SearchBar.scss';

const SearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const ref = useRef();

    const handleSearch = (e) => {
        e.preventDefault()
        const queryObj = {};

        for (const key of searchParams.keys()) {
            if (key !== "search") {
                queryObj[key] = searchParams.get(key);
            }
        }
        if (!ref.current.value) {
            setSearchParams({...queryObj})
        } else {
            setSearchParams({...queryObj, search: ref.current.value})
        }
    }

    return (
        <div className="search-form__container">
            <h2>Find your movie</h2>
            <Form onSubmit={handleSearch} id="search-form" data-testid="search-form">
                <input name="search" defaultValue={searchParams.get('search')} ref={ref} placeholder="What do you want to watch?"/>
                <button type="submit">Search</button>
            </Form>
        </div>
    );
}

export default SearchBar;
