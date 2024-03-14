import React, { useState, MouseEvent } from "react";
import { createPortal } from 'react-dom';
import Dialog from './Dialog';
import MovieForm from './MovieForm';
import {MovieData} from '../types'

export interface DialogOpenButtonProps {
    movieData?: MovieData;
    onDialogFormSubmit: () => void;
    isDeleteForm?: boolean;
    dialogTitle: string;
    buttonText: string;
}

const DialogOpenButton: React.FC<DialogOpenButtonProps> = ({movieData, onDialogFormSubmit, isDeleteForm = false, dialogTitle, buttonText = "Open Dialog"}) => {
    const [isDialogOpen, setDialogOpen] = useState(false)

    const handleDialogOpen = (event: MouseEvent<HTMLButtonElement>) => {
        setDialogOpen(true)
    }

    return (
        <>
            <button className="dialog-open-btn" onClick={handleDialogOpen}>{buttonText}</button>
            {isDialogOpen && createPortal(
                <Dialog  title={dialogTitle}>
                    <MovieForm movieData={movieData} handleSubmit={onDialogFormSubmit} isDeleteForm={isDeleteForm}/>
                </Dialog>,
                document.body
            )}
        </>
    )
}

export default DialogOpenButton
