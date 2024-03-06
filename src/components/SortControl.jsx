import '../styles/SortControl.scss';
import PropTypes from 'prop-types';

const SortControl = ({selectedSorting, onSortChange}) => {
    return (
        <div className="sorting-container">
            <p>SORT BY</p>
            <select value={selectedSorting} onChange={(e) => onSortChange(e.currentTarget.value)}>
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
