import Dialog from './Dialog';
import MovieForm from './MovieForm';
import { createPortal } from 'react-dom';
import {useLoaderData } from "react-router-dom";

const EditMovie = () => {
    const loadedData = useLoaderData()
    return (
        createPortal(
            <Dialog title={"Edit Movie"} >
                <MovieForm movieData={loadedData} handleSubmit={() => console.log("edit movie submitted")} />
            </Dialog>,
        document.body)
    )
}

export default EditMovie;