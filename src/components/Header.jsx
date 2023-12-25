import React from "react";

function Header(){
    return (
        <header>
            <h1 className="notification">Notifications <span className="icon">3</span></h1>
            <p className="mark-all">Mark all as read</p>
        </header>
    )
}

export default Header;