// Importing packages
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing base styling
import "./styles/base.scss";

// Importing components
import Navbar from "./components/Navbar";
import AuthForm from "./components/AuthForm";
import NotesView from "./components/NotesView";

// Importing state
import NoteState from "./context/notes/noteState";

const App = () => {
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
                                        <NotesView />
                                    </>
                                }
                            />
                        </Routes>
                    </div>
                </Router>
            </NoteState>
        </>
    );
};

export default App;
