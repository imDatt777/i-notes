import React from "react";

// Import styling
import "../styles/sidebar.scss";

// Importing assets
import tagsIcon from "../assets/tags-icon.svg";
import tagIcon from "../assets/tag-icon.svg";
import plusIcon from "../assets/plus-icon.svg";
import deleteIcon from "../assets/delete-icon.svg";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img className="tags-icon" src={tagsIcon} alt="Tags Icon" />
                <h3 className="tags-header">Tags</h3>
                <img className="plus-icon" src={plusIcon} alt="Plus Icon" />
            </div>
            <div className="tags-list">
                <div className="tag-item active">
                    <img className="tag-icon" src={tagIcon} alt="Tag Icon" />
                    <p className="tag-title">Personal</p>
                    <div className="icons-wrapper">
                        <img
                            className="plus-icon"
                            src={plusIcon}
                            alt="Plus Icon"
                        />
                        <img
                            className="delete-icon"
                            src={deleteIcon}
                            alt="Delete Icon"
                        />
                    </div>
                </div>
                <div className="tag-item">
                    <img className="tag-icon" src={tagIcon} alt="Tag Icon" />
                    <p className="tag-title">Important</p>
                    <div className="icons-wrapper">
                        <img
                            className="plus-icon"
                            src={plusIcon}
                            alt="Plus Icon"
                        />
                        <img
                            className="delete-icon"
                            src={deleteIcon}
                            alt="Delete Icon"
                        />
                    </div>
                </div>
                <div className="tag-item">
                    <img className="tag-icon" src={tagIcon} alt="Tag Icon" />
                    <p className="tag-title">Reminder</p>
                    <div className="icons-wrapper">
                        <img
                            className="plus-icon"
                            src={plusIcon}
                            alt="Plus Icon"
                        />
                        <img
                            className="delete-icon"
                            src={deleteIcon}
                            alt="Delete Icon"
                        />
                    </div>
                </div>
                <div className="tag-item">
                    <img className="tag-icon" src={tagIcon} alt="Tag Icon" />
                    <p className="tag-title">Work</p>
                    <div className="icons-wrapper">
                        <img
                            className="plus-icon"
                            src={plusIcon}
                            alt="Plus Icon"
                        />
                        <img
                            className="delete-icon"
                            src={deleteIcon}
                            alt="Delete Icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
