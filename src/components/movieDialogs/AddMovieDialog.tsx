import { FC } from 'react';
import Dialog from '../Dialog';
import AddMovieForm from '../movieForms/AddMovieForm';
import { createPortal } from 'react-dom';

const AddNewMovie: FC = () => {
    return (
        createPortal(
            <Dialog title={"Add Movie"} >
                <AddMovieForm />
            </Dialog>,
        document.body)
    )
}

export default AddNewMovie;
