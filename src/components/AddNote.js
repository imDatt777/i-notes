import React from "react";

// Import styling
import "../styles/addnote.scss";

const AddNote = () => {
    return (
        <>
            <div className="create-wrapper">
                <p>Add a note...</p>
                <span className="add-icon"></span>
            </div>
            <div className="expanded">
                <form>
                    <input type="text" placeholder="Title" />
                    <textarea type="text" placeholder="Add a note..." />
                    <span className="tick"></span>
                </form>
            </div>
        </>
    );
};

export default AddNote;
