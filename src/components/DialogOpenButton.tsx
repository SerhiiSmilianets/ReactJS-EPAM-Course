import React, { useState, MouseEvent } from "react";
import { createPortal } from 'react-dom';
import Dialog from './Dialog';
import MovieForm from './MovieForm';
import {DialogOpenButtonProps} from '../types'

const DialogOpenButton: React.FC<DialogOpenButtonProps> = ({movieData, onDialogFormSubmit, isDeleteForm = false, dialogTitle, buttonText = "Open Dialog"}) => {
    const [isDialogOpen, setDialogOpen] = useState(false)

    const handleDialogOpen = (event: MouseEvent<HTMLButtonElement>) => {
        setDialogOpen(true)
    }

    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    return (
        <>
            <button className="dialog-open-btn" onClick={handleDialogOpen}>{buttonText}</button>
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
