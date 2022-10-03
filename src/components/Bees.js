import React from "react";
import PhotoFetcher from "./PhotoFetcher";

const Bees = ({ myApiKey, searchValue }) => {
    return(
        <PhotoFetcher
            myApiKey = {myApiKey}
            searchValue = {searchValue}
        />
    )
}

export default Bees; 