import React from "react";
import { Link } from "react-router-dom";

const MainNav = (props) => {
    const submitFunction = (e) => props.submitSearch(e, e.target.innerText);

    return (
        <nav className="main-nav">
            <ul>
                <li onClick={submitFunction}>
                    <Link to='/waterfalls'>Waterfalls</Link>
                </li>
                <li onClick={submitFunction}>
                    <Link to='/bees'>Bees</Link>
                </li>
                <li onClick={submitFunction}>
                    <Link to='/mountains'>Mountains</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav;