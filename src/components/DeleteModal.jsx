const DeleteModal = ({ onClose, handleDelete }) => {
    return(
        <div className="DeleteModal">
            <h3>Do you really want to delete this creator?</h3>
            <div className="buttons-container">
                <button onClick={handleDelete}>Delete</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteModal;