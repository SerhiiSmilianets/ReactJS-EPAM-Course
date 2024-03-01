import PropTypes from 'prop-types';

const SortControl = ({selectedSorting, onChange}) => {
    const handleOnChange = (e) => {
        if (typeof onChange === "function") {
            onChange(e.currentTarget.value)
        }
    }

    return (
        <div className="sorting-container">
            <p>SORT BY</p>
            <select value={selectedSorting} onChange={handleOnChange}>
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
