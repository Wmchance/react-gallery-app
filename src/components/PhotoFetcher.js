import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import PhotoContainer from "./PhotoContainer";
import IsLoading from "./IsLoading";
import NoResults from "./NoResults";

//Receives the Flickr api key & the searched value from the App component, uses them to construct a search url, 
//fetches the info from that url, maps over the resulting array of photos, and passes the info for each photo to 
//PhotoContainer to be rendered
const PhotoFetcher = ({ myApiKey, searchValue }) => {
    
    let title; //Used to dynamically render the searched for value
    
    const location = useLocation(); //React hook to grab data about the location of the current page

    //pathname from location
    //Proceeding '/' removed so that it can be used to update the fetched images when the browser navigation buttons(<- ->) are used 
    const urlNameValue = location.pathname.slice(1); 

    const [Photos, fetchPhotos] = useState([]) //Holds the state of the array of images received from fetch request

    let fetchUrl; //url used to fetch images from the Flickr api

    const [isLoading, upDateLoading] = useState(true); //State is used to show if the fetch request is finished so that it can be displayed to users

    //Conditional keeps the displayed images matched with the url when using the browser navigation buttons(<- ->)
    //If searchValue exists & is equal to the url pathname, searchValue is used. Otherwise, the url pathname is used 
    if(searchValue && searchValue === urlNameValue) {
        fetchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${myApiKey}&tags=${searchValue}&per_page=24&format=json&nojsoncallback=1`;
        title = searchValue;
    } else {
        fetchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${myApiKey}&tags=${urlNameValue}&per_page=24&format=json&nojsoncallback=1`;
        title = urlNameValue;
    }

    //Fetches photo array from Flickr & 
    //sets isloading to false(this allows the photos to be displayed, rather than the IsLoading message, in the below conditional)
    const getPhotos = () => {
        fetch(fetchUrl)
        .then((res) => res.json())    
        .then((res) => {
            fetchPhotos(res.photos.photo)
            upDateLoading(false)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        getPhotos()
        upDateLoading(true)
        // eslint-disable-next-line
      }, [urlNameValue])    

    //Checks the state of isLoading & the length of the photo array stored in the Photos state to determine which component to display
    if(isLoading) {
        return (
            <IsLoading title={title}/>
        )
    } else if (Photos.length === 0) {
        return (
            <NoResults title={title}/> 
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