import React, { useContext, useEffect } from "react";
import NoteCard from "./NoteCard";
import AddNote from "./AddNote";

import NoteContext from "../context/notes/noteContext";

const NotesView = () => {
    const context = useContext(NoteContext);
    const { notes, fetchNotes } = context;

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="main-container">
            <AddNote />
            <div className="notes-wrapper">
                {notes.map((note) => {
                    return <NoteCard key={note._id} note={note} />;
                })}
            </div>
        </div>
    );
};

export default NotesView;
