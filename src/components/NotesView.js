import React, { useContext, useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import AddNote from "./AddNote";

import NoteContext from "../context/notes/noteContext";

// Import styling
import "../styles/notesview.scss";

const NotesView = (props) => {
    const { setMessage } = props;
    const context = useContext(NoteContext);
    const { notes, fetchNotes, editNote, deleteNote } = context;

    // eslint-disable-next-line
    const [values, setValues] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='main-container'>
            <AddNote
                setMessage={setMessage}
                values={values}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
            />
            <div className='notes-wrapper'>
                {notes.map((note) => {
                    return (
                        <NoteCard
                            key={note._id}
                            note={note}
                            editNote={editNote}
                            deleteNote={deleteNote}
                            setValues={setValues}
                            setIsEdit={setIsEdit}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default NotesView;
