import React, { useState, MouseEvent } from "react";
import { createPortal } from 'react-dom';
import Dialog from './Dialog';
import MovieForm from './MovieForm';

interface MovieData {
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genres: string[];
  runtime: number;
  overview: string;
}

export interface DialogOpenButtonProps {
  movieData: MovieData;
  onDialogFormSubmit: () => void;
  isDeleteForm: boolean;
  dialogTitle: string;
}

const DialogOpenButton: React.FC<DialogOpenButtonProps> = ({movieData, onDialogFormSubmit, isDeleteForm, dialogTitle}) => {
    const [isDialogOpen, setDialogOpen] = useState(false)

    const handleDialogOpen = (event: MouseEvent<HTMLButtonElement>) => {
        setDialogOpen(true)
    }

    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    return (
        <>
            <button onClick={handleDialogOpen}>Open Dialog</button>
            {isDialogOpen && createPortal(
                <Dialog handleClose={handleDialogClose} title={dialogTitle}>
                    <MovieForm movieData={movieData} onSubmit={onDialogFormSubmit} isDeleteForm={isDeleteForm}/>
                </Dialog>,
                document.body
            )}
        </>
    )
}

export default DialogOpenButton
