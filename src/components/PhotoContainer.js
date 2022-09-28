import React from "react";

const PhotoContainer = (props) => {
    const myUrl = `https://live.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}.jpg`

    return (
        <li>
            <img src= {myUrl} alt="" />
        </li>
    )
}

export default PhotoContainer;