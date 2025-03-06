import "./Modal.css";

const Modal = ({ setModalOpen, deleteNote }) => {
    return (
        <div className="c-modal-overlay">
            <div className="c-modal">
                <button
                    className="close-button"
                    onClick={() => setModalOpen(false)}
                >
                    ×
                </button>
                <div className="c-modal-content">
                    <h2>Delete Note</h2>
                    <p>Are you you want to Delete this note?</p>
                    <span className="d-flex justify-content-center">
                        <button
                            className="btn btn-danger me-3"
                            onClick={deleteNote}
                        >
                            Delete
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => setModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Modal;
