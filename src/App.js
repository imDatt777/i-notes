// Importing base styling
import "./styles/base.scss";

// Importing components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NoteCard from "./components/NoteCard";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="main-container">
                <div className="sidebar-wrapper">
                    <Sidebar />
                </div>
                <div className="notes-wrapper">
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                </div>
            </div>
        </div>
    );
}

export default App;
