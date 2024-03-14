import Dialog from './Dialog';
import MovieForm from './MovieForm';
import { createPortal } from 'react-dom';

const AddNewMovie = () => {
    return (
        createPortal(
            <Dialog title={"Add Movie"} >
                <MovieForm handleSubmit={() => console.log("add movie submitted")} />
            </Dialog>,
        document.body)
    )
}

export default AddNewMovie;