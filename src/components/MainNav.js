import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = ({ submitSearch }) => {
    //Function sent from App through props so that resulting seach value can be lifted to app & passed down to PhotoFetcher
    const submitFunction = (e) => submitSearch(e, e.target.innerText);

    //Links the url to the given route & sends the search value up to App through the above submitFunction function
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