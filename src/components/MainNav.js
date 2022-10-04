import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = ({ submitSearch }) => {
    const submitFunction = (e) => submitSearch(e, e.target.innerText);

    return (
        <nav className="main-nav">
            <ul>
                <li onClick={submitFunction}>
                    <NavLink to='/waterfalls'>Waterfalls</NavLink>
                </li>
                <li onClick={submitFunction}>
                    <NavLink to='/bees'>Bees</NavLink>
                </li>
                <li onClick={submitFunction}>
                    <NavLink to='/mountains'>Mountains</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav;