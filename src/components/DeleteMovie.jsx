import Dialog from './Dialog';
import MovieForm from './MovieForm';
import { createPortal } from 'react-dom';

const DeleteMovie = () => {
    return (
        createPortal(
            <Dialog title={"Delete Movie"} >
                <MovieForm isDeleteForm={true} handleSubmit={() => console.log("delete movie submitted")} />
            </Dialog>,
        document.body)
    )
}

export default DeleteMovie;