import React from "react";

// Import styling
import "../styles/notecard.scss";

// Importing assets
import deleteIcon from "../assets/delete-icon.svg";
import editIcon from "../assets/edit-icon.svg";

const NoteCard = (props) => {
    const { note = {}, editNote, deleteNote, setValues } = props;

    const editHandler = () => {
        editNote(note._id, note.title, note.description, note.tag);
        setValues({
            title: note.title,
            description: note.description,
            tag: note.tag
        });
    };

    const deleteHandler = () => {
        deleteNote(note._id);
    };

    return (
        <div className="note-wrapper">
            <h3 className="note-title">{note.title}</h3>
            <p className="note-description">{note.description}</p>
            <div className="icons-wrapper">
                <div className="update-wrapper" onClick={editHandler}>
                    <img className="edit-icon" src={editIcon} alt="Edit Icon" />
                </div>
                <div className="delete-wrapper" onClick={deleteHandler}>
                    <img
                        className="delete-icon"
                        src={deleteIcon}
                        alt="Delete Icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
