import { useRef, FormEvent } from "react";
import { useSearchParams, Link, Outlet, useLocation, Form } from 'react-router-dom';
import '../styles/SearchBar.scss';

const SearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const ref = useRef<HTMLInputElement>(null);
    const location = useLocation();

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()
        const queryObj: any = {};

        for (const key of searchParams.keys()) {
            if (key !== "search") {
                queryObj[key] = searchParams.get(key);
            }
        }
        if (!ref.current?.value) {
            setSearchParams({...queryObj})
        } else {
            setSearchParams({...queryObj, search: ref.current.value})
        }
    }

    return (
        <div className="default-header__container">
            <div className="add-movie__container">
                <Link to={`/new${location.search}`} className="dialog-open-btn">+ ADD MOVIE</Link>
            </div>
            <div className="searchbar__container">
                <div className="search-form__container">
                    <h2>Find your movie</h2>
                    <Form onSubmit={handleSearch} id="search-form" data-testid="search-form">
                        <input name="search" defaultValue={searchParams.get('search') || ''} ref={ref} placeholder="What do you want to watch?"/>
                        <button type="submit">Search</button>
                    </Form>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default SearchBar;
