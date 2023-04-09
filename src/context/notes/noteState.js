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

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`/api/notes/editnote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag })
        });

        // eslint-disable-next-line
        const json = await response.json();

        const updatedNotes = JSON.parse(JSON.stringify(notes));

        // Updating on client side
        for (let i = 0; i < updatedNotes.length; i++) {
            const noteItem = updatedNotes[i];
            if (noteItem._id === id) {
                updatedNotes[i].title = title;
                updatedNotes[i].description = description;
                updatedNotes[i].tag = tag;
            }
        }

        // Updating notes
        setNotes(updatedNotes);
    };

    // Delete a note
    const deleteNote = async (id) => {
        const response = await fetch(`/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        // eslint-disable-next-line
        const json = response.json();

        const updatedNotes = notes.filter((note) => {
            return note._id !== id;
        });

        setNotes(updatedNotes);
    };

    return (
        <NoteContext.Provider
            value={{ notes, fetchNotes, addNote, editNote, deleteNote }}
        >
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
