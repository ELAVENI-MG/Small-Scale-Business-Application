import "./index.css";

const Modal =({isOpen, onClose, children}) =>{
    if(!isOpen)
    {
        return null;
    }

    return (
        <div className="modal1">
            <div className="modalblock">
                {children}
            </div>
        </div>
    )
}

export default Modal;