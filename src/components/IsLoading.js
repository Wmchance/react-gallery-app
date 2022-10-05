import React from "react";

const IsLoading = ({title}) => {
    return(
        <div className="photo-container">
            <h2>Just a moment please</h2>
            <p>We're loading up your {title} photos now!</p>
        </div>
    )
}

export default IsLoading;