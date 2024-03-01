import { useState } from "react";
import { createPortal } from 'react-dom';
import Dialog from './Dialog';
import MovieForm from './MovieForm';


const DialogOpenButton = () => {
    const [isDialogOpen, setDialogOpen] = useState(false)

    const handleDialogOpen = () => {
        setDialogOpen(true)
    }

    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    return (
        <>
            <button onClick={handleDialogOpen}>Open Dialog</button>
            {isDialogOpen && createPortal(
                <Dialog onClose={handleDialogClose} title={"test title"}>
                    <MovieForm movieData={{}} onSubmit={() => console.log("submit form event")} isDeleteForm={false}/>
                </Dialog>,
                document.body
            )}
            
        </>
    )
}

export default DialogOpenButton