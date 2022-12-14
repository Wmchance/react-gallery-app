import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Displays a search form & lifts the returned value to the App component through submitSearch function
const SearchForm = ({ submitSearch }) => {
    
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate(); //Allow for the url and route to reflect the searched for value(Navigates to the given url)
    
    return (
        <form 
            onSubmit = {(e) => {
                submitSearch(e, searchValue) //Lifts the searched value up to the App component
                navigate('/' + searchValue) //Directs the url to the given searchValue
                setSearchValue('') //Resets the search field after the form is submitted
                }}
            className="search-form">
                <input 
                    type="search" 
                    name="search" 
                    placeholder="Search" 
                    value={searchValue} 
                    onChange = {(e) => setSearchValue(e.target.value)} //Updates the searchValue on each keypress
                    required
                />
                
                <button type="submit" className="search-button">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
        </form>
    )
}

export default SearchForm;