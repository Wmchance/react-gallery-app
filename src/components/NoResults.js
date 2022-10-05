import React from "react";

//Message to display when the search returns no results 
const NoResults = ({title}) => {
    return(
        <div className="photo-container">
                <h2>Sorry, we couldn't find any photos matching '{title}'</h2>
                <p>Please try another search</p>
            </div>
    )
}

export default NoResults;