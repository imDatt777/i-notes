import React from "react";

// Import styling
import "../styles/notecard.scss";

// Importing assets
import deleteIcon from "../assets/delete-icon.svg";
import editIcon from "../assets/edit-icon.svg";

const NoteCard = () => {
    return (
        <div className="note-wrapper">
            <h3 className="note-title">Title</h3>
            <p className="note-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis dignissimos, facere libero, vitae suscipit amet
                corporis fugit beatae ipsum voluptas nesciunt sint voluptatibus,
                fugiat ipsam harum eum velit in. At hic voluptatum repellat
                officia beatae. Unde illum ad, ipsa aliquam, illo doloremque
                minima aliquid similique debitis deleniti, odit nihil delectus!
            </p>
            <div className="icons-wrapper">
                <img className="edit-icon" src={editIcon} alt="Edit Icon" />
                <img
                    className="delete-icon"
                    src={deleteIcon}
                    alt="Delete Icon"
                />
            </div>
        </div>
    );
};

export default NoteCard;
