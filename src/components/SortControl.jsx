import '../styles/SortControl.scss';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const SortControl = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleSortChange = (sorting) => {
        const queryObj = {};
        for (const key of searchParams.keys()) {
            queryObj[key] = searchParams.get(key);
        }
        setSearchParams({...queryObj, sortBy: sorting})
    }

    return (
        <div className="sorting-container">
            <p>SORT BY</p>
            <select value={searchParams.get('sortBy') || 'release_date'} onChange={(e) => handleSortChange(e.currentTarget.value)}>
                <option value="release_date">Release Date</option>
                <option value="title">Title</option>
            </select>
        </div>
    )
}

SortControl.propTypes = {
    selectedSorting: PropTypes.string,
    onChange: PropTypes.func
}

export default SortControl
