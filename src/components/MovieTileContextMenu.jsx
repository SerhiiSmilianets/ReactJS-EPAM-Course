// import DialogOpenButton from '../components/DialogOpenButton';
import { useRef, useEffect } from 'react';

const useOutsideClick = (ref, handleMenuClose) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && !event.target.classList.contains("dialog__container")) {
                handleMenuClose()
            }
        }
          // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const MovieTileContextMenu = ({movieContextMenuData, handleMenuTileContextClose, DialogOpenButton}) => {
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, handleMenuTileContextClose);

    return (
        <div className='movie-tile__context-container'ref={wrapperRef}>
            <button className="close-context-btn" onClick={handleMenuTileContextClose}>&times;</button>
            <ul className='movie-tile__context-menu'>
                <li><DialogOpenButton movieData={movieContextMenuData} dialogTitle={'Edit Movie'} buttonText={'Edit'}/></li>
                <li><DialogOpenButton isDeleteForm={true} dialogTitle={'Delete Movie'} buttonText={'Delete'}/></li>
            </ul>
        </div>
    )
}

export default MovieTileContextMenu;
