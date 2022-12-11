import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const [notes, setNotes] = useState([]);

    // Get all notes
    const fetchNotes = async () => {
        const response = await fetch("/api/notes/fetchallnotes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });

        const notes = await response.json();
        setNotes(notes);
    };

    // Add a note
    const addNote = async (title, description, tag) => {
        const response = await fetch("/api/notes/addnote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag })
        });

        const note = await response.json();
        setNotes(notes.concat(note));
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
