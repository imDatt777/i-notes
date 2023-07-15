import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../context/notes/noteContext";

// Import styling
import "../styles/addnote.scss";

const AddNote = (props) => {
    const { setMessage, values = {}, isEdit, setIsEdit } = props;
    const context = useContext(NoteContext);
    const { addNote, editNote } = context;
    const [isExpanded, setIsExpanded] = useState({ flag: false });
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const toggleExpand = () => {
        setIsExpanded((prevState) => ({
            flag: !prevState.flag,
        }));
    };

    const noteValidator = () => {
        if (
            note.title.length > 0 &&
            note.description.length > 0 &&
            note.tag.length > 0
        ) {
            isEdit
                ? editNote(note.id, note.title, note.description, note.tag)
                : addNote(note.title, note.description, note.tag);
        } else {
            setMessage("Note fields cannot be empty !");
        }
    };

    const onSubmitClick = (event) => {
        event.preventDefault();
        noteValidator();

        setIsEdit(false);
        setNote({ title: "", description: "", tag: "" });
        toggleExpand();
    };

    const onNoteChange = (event) => {
        event.preventDefault();
        setNote({ ...note, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        const { id = "", title = "", description = "", tag = "" } = values;

        if (id.length > 0) {
            setNote({ id, title, description, tag });
        }
    }, [values]);

    useEffect(() => {
        isEdit && toggleExpand();
    }, [isEdit]);

    return (
        <>
            <div className='create-wrapper'>
                <p>Add a note...</p>
                <span onClick={toggleExpand} className='add-icon'></span>
            </div>
            {isExpanded.flag && (
                <div className='expanded'>
                    <form>
                        <input
                            type='text'
                            placeholder='Title'
                            name='title'
                            onChange={onNoteChange}
                            value={note.title}
                        />
                        <textarea
                            type='text'
                            placeholder='Add a note...'
                            name='description'
                            onChange={onNoteChange}
                            value={note.description}
                        />
                        <div className='tag-save'>
                            <input
                                type='text'
                                placeholder='Tag'
                                name='tag'
                                onChange={onNoteChange}
                                value={note.tag}
                            />
                            <div className='tick-wrapper'>
                                <div
                                    className='tick'
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
