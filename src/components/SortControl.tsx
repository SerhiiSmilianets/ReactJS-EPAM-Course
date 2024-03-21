import { FC, ChangeEvent } from 'react';
import '../styles/SortControl.scss';
import { useSearchParams } from 'react-router-dom';

const SortControl: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleSortChange = (sorting: string) => {
        const queryObj: any = {};
        for (const key of searchParams.keys()) {
            queryObj[key] = searchParams.get(key);
        }
        setSearchParams({...queryObj, sortBy: sorting})
    }

    return (
        <div className="sorting-container">
            <p>SORT BY</p>
            <select value={searchParams.get('sortBy') || 'release_date'} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSortChange(e.currentTarget.value)}>
                <option value="release_date">Release Date</option>
                <option value="title">Title</option>
            </select>
        </div>
    )
}

export default SortControl
