import React, { useState } from "react";

// Import styling
import "../styles/addnote.scss";

const AddNote = () => {
    const [isExpanded, setIsExpanded] = useState({ flag: false });

    const enableExpand = () => {
        setIsExpanded((prevState) => ({
            flag: !prevState.flag,
        }));
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
                        <input type="text" placeholder="Title" />
                        <textarea type="text" placeholder="Add a note..." />
                        <span className="tick"></span>
                    </form>
                </div>
            )}
        </>
    );
};

export default AddNote;
