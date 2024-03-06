import React, { ReactNode, MouseEvent } from 'react';
import '../styles/Dialog.scss';

interface DialogProps {
  title: string;
  handleClose: () => void;
  children: ReactNode;
}

const Dialog: React.FC<DialogProps> = ({title, handleClose, children}) => {
    const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
        if (typeof handleClose === "function") {
            handleClose()
        }
    }

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (typeof handleClose === "function") {
            handleClose()
        }
    }

    if (!children) {
        return (<h1>No Child Element Being Provided</h1>)
    }
    return (
        <>
            <div className="dialog__overlay" onClick={handleOverlayClick}></div>
            <div className="dialog__container">
                <div className="dialog__header">
                    <h2>{title}</h2>
                    <button onClick={handleClick}>&times;</button>
                </div>
                <div className="dialog__content">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Dialog
