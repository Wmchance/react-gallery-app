import React from "react";

const PhotoContainer = (props) => {
    //Receives photo information from PhotoFetcher & uses the info to construct the Flickr url for that image
    const myUrl = `https://live.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}.jpg`

    //Renders a list item with nested img from the constructed url for each img received
    return (
        <li>
            <img src= {myUrl} alt={props.photo.title} />
        </li>
    )
}

export default PhotoContainer;