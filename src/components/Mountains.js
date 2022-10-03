import React from "react";
import PhotoFetcher from "./PhotoFetcher";

const Mountains = ({ myApiKey, searchValue }) => {
    return(
        <PhotoFetcher
            myApiKey = {myApiKey}
            searchValue = {searchValue}
        />
    )
}

export default Mountains; 