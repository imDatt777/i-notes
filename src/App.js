// Importing packages
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing base styling
import "./styles/base.scss";

// Importing components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NoteCard from "./components/NoteCard";
import AddNote from "./components/AddNote";
import AuthForm from "./components/AuthForm";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<AuthForm />} />
                    <Route
                        exact
                        path="/notes"
                        element={
                            <>
                                <Navbar />
                                <div className="main-container">
                                    <div className="sidebar-wrapper">
                                        <Sidebar />
                                    </div>
                                    <AddNote />
                                    <div className="notes-wrapper">
                                        <NoteCard />
                                        <NoteCard />
                                        <NoteCard />
                                        <NoteCard />
                                    </div>
                                </div>
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
