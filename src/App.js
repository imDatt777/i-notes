// Importing packages
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing base styling
import "./styles/base.scss";

// Importing components
import Navbar from "./components/Navbar";
import AuthForm from "./components/AuthForm";
import NotesView from "./components/NotesView";
import Toast from "./components/toast";

// Importing state
import NoteState from "./context/notes/noteState";

const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (message.length > 0) {
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    }, [message]);

    return (
        <>
            <NoteState>
                <Router>
                    <div className="App">
                        <Routes>
                            <Route exact path="/" element={<AuthForm />} />
                            <Route
                                exact
                                path="/signup"
                                element={<AuthForm isNew />}
                            />
                            <Route
                                exact
                                path="/notes"
                                element={
                                    <>
                                        <Navbar />
                                        <NotesView setMessage={setMessage} />
                                    </>
                                }
                            />
                        </Routes>
                        <Toast message={message} />
                    </div>
                </Router>
            </NoteState>
        </>
    );
};

export default App;
