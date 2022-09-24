import React from "react";

// Importing styles
import "../styles/navbar.scss";

// Importing assets
import mainIcon from "../assets/notes-icon.png";
import searchIcon from "../assets/search-icon.svg";
import settingIcon from "../assets/setting-icon.svg";
import crossIcon from "../assets/cross-icon.svg";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="header-logo-wrapper">
                <img className="notes-icon" src={mainIcon} alt="Notes Icon" />
                <h2 className="header-title">i-notes</h2>
            </div>
            <div className="search-bar-wrapper">
                <img
                    className="search-icon"
                    src={searchIcon}
                    alt="Search Icon"
                />
                <input className="search" placeholder="Search Notes..." />
                <img className="cross-icon" src={crossIcon} alt="Cross Icon" />
            </div>
            <div className="header-profile-section">
                <img
                    className="setting-icon"
                    src={settingIcon}
                    alt="Setting Icon"
                />
                <div className="profile-avatar">
                    <div className="avatar"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
