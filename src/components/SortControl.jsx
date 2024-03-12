import '../styles/SortControl.scss';
import PropTypes from 'prop-types';

const SortControl = ({selectedSorting, handleSortChange}) => {
    return (
        <div className="sorting-container">
            <p>SORT BY</p>
            <select value={selectedSorting} onChange={(e) => handleSortChange(e.currentTarget.value)}>
                <option value="realeaseDate">Release Date</option>
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
