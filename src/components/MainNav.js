import React from "react";

const MainNav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
            <li><a href='#' onClick={(e) => props.submitSearch(e, e.target.innerText)}>Cats</a></li>
            <li><a href='#' onClick={(e) => props.submitSearch(e, e.target.innerText)}>Dogs</a></li>
            <li><a href='#' onClick={(e) => props.submitSearch(e, e.target.innerText)}>Computers</a></li>
            </ul>
        </nav>
    )
}

export default MainNav;