import React from "react";
import PhotoFetcher from "./PhotoFetcher";

const Waterfalls = ({ myApiKey, searchValue }) => {
    return(
        <PhotoFetcher
            myApiKey = {myApiKey}
            searchValue = {searchValue}
        />
    )
}

export default Waterfalls; 