import React from 'react';
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <NavLink exact to="/"><img src="/images/header.png" alt="header"/></NavLink>
        </div>
    )
}
