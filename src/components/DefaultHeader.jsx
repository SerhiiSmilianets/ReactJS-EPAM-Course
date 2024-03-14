import SearchBar from './SearchBar';
import DialogOpenButton from './DialogOpenButton';

const DefaultHeader = () => {
    return (
        <div className="default-header__container">
            <div className="add-movie__container">
                <DialogOpenButton dialogTitle={"Add Movie"} buttonText={"+ ADD MOVIE"}  onDialogFormSubmit={() => {}}/>
            </div>
            <div className="searchbar__container">
                <SearchBar/>
            </div>
        </div>
    )
}

export default DefaultHeader