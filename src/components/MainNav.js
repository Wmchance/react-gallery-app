import React from "react";

const MainNav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
            <li><a href='#' onClick={(e) => props.submitSearch(e, e.target.innerText)}>Waterfalls</a></li>
            <li><a href='#' onClick={(e) => props.submitSearch(e, e.target.innerText)}>Bees</a></li>
            <li><a href='#' onClick={(e) => props.submitSearch(e, e.target.innerText)}>Mountains</a></li>
            </ul>
        </nav>
    )
}

export default MainNav;