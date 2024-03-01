const Dialog = ({title, onClose, children}) => {
    const handleOnClose = () => {
        if (typeof onClose === "function") {
            onClose()
        }
    }
    if (!children) {
        return (<h1>No Child Element Being Provided</h1>)
    }
    return (
        <div className="dialog__container">
            <div className="dialog__header">
                <h2>{title}</h2>
                <button onClick={handleOnClose}>x</button>
            </div>
            <div className="dialog__content">
                {children}
            </div>
        </div>
    )
}

export default Dialog
