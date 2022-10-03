import React, { useState, useEffect } from "react";
import PhotoContainer from "./PhotoContainer";


const PhotoFetcher = ({ myApiKey, searchValue }) => {

    const [Photos, fetchPhotos] = useState([])
    const fetchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${myApiKey}&tags=${searchValue}&per_page=24&format=json&nojsoncallback=1`

    const getPhotos = () => {
        fetch(fetchUrl)
        .then((res) => res.json())    
        .then((res) => {
            fetchPhotos(res.photos.photo)
        })
    }

    useEffect(() => {
        getPhotos()
        // eslint-disable-next-line
      }, [fetchUrl])    

    console.log(Photos); //Why does this log 3 times?!? 
   
    if (Photos.length === 0) {
        return (
            <div className="photo-container">
                <h2>Sorry, we couldn't find any photos matching {searchValue}</h2>
            </div>
        )
    } else {
        return(
            <div className="photo-container">
                <h2>{searchValue}!</h2>
                <ul>
                    {Photos.map((photo, i) => {
                        return (
                            <PhotoContainer 
                                photo={photo}
                                key={i}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default PhotoFetcher;