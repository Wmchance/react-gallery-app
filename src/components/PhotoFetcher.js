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
   
      return (
        <div className="photo-container">
            <h2>Results</h2>
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

export default PhotoFetcher;