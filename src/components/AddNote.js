import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

// Import styling
import "../styles/addnote.scss";

const AddNote = (props) => {
    const { setMessage } = props;
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [isExpanded, setIsExpanded] = useState({ flag: false });
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const enableExpand = () => {
        setIsExpanded((prevState) => ({
            flag: !prevState.flag
        }));
    };

    const noteValidator = () => {
        if (
            note.title.length > 0 &&
            note.description.length > 0 &&
            note.tag.length > 0
        ) {
            addNote(note.title, note.description, note.tag);
        } else {
            setMessage("Note fields cannot be empty !");
        }
    };

    const onSubmitClick = (event) => {
        event.preventDefault();
        noteValidator();

        setNote({ title: "", description: "", tag: "" });
    };

    const onNoteChange = (event) => {
        event.preventDefault();
        // setMessage("");
        setNote({ ...note, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div className="create-wrapper">
                <p>Add a note...</p>
                <span onClick={enableExpand} className="add-icon"></span>
            </div>
            {isExpanded.flag && (
                <div className="expanded">
                    <form>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            onChange={onNoteChange}
                            value={note.title}
                        />
                        <textarea
                            type="text"
                            placeholder="Add a note..."
                            name="description"
                            onChange={onNoteChange}
                            value={note.description}
                        />
                        <div className="tag-save">
                            <input
                                type="text"
                                placeholder="Tag"
                                name="tag"
                                onChange={onNoteChange}
                                value={note.tag}
                            />
                            <div className="tick-wrapper">
                                <div
                                    className="tick"
                                    onClick={onSubmitClick}
                                ></div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default AddNote;
