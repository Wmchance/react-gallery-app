import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import PhotoContainer from "./PhotoContainer";


const PhotoFetcher = ({ myApiKey, searchValue }) => {
    
    let title;
    
    const location = useLocation();
    const urlNameValue = location.pathname.slice(1); 

    const [Photos, fetchPhotos] = useState([])
    let fetchUrl;

    if(searchValue && searchValue === urlNameValue) {
        fetchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${myApiKey}&tags=${searchValue}&per_page=24&format=json&nojsoncallback=1`;
        title = searchValue;
    } else {
        fetchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${myApiKey}&tags=${urlNameValue}&per_page=24&format=json&nojsoncallback=1`;
        title = urlNameValue;
    }

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
      }, [urlNameValue])    

    // console.log(Photos); //Why does this log 3 times?!? 
   
    if (Photos.length === 0) {
        return (
            <div className="photo-container">
                <h2>Sorry, we couldn't find any photos matching {searchValue}</h2>
            </div>
        )
    } else {
        return(
            <div className="photo-container">
                <h2>{title}!</h2>
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