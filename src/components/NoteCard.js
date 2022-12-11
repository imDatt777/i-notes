import React from "react";

// Import styling
import "../styles/notecard.scss";

// Importing assets
import deleteIcon from "../assets/delete-icon.svg";
import editIcon from "../assets/edit-icon.svg";

const NoteCard = (props) => {
    const { note = {} } = props;

    return (
        <div className="note-wrapper">
            <h3 className="note-title">{note.title}</h3>
            <p className="note-description">{note.description}</p>
            <div className="icons-wrapper">
                <img className="edit-icon" src={editIcon} alt="Edit Icon" />
                <img
                    className="delete-icon"
                    src={deleteIcon}
                    alt="Delete Icon"
                />
            </div>
        </div>
    );
};

export default NoteCard;
