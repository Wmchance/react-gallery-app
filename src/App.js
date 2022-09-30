import React, { useState } from "react";
import {
  createBrowserRouter,
  Route,
} from "react-router-dom";
import MainNav from "./components/MainNav";
import SearchForm from "./components/SearchForm";
import PhotoFetcher from "./components/PhotoFetcher";

import apiKey from "./config";

function App() {

  const myApiKey = apiKey;

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e, searchValue) => {
    e.preventDefault();
    setSearchValue(searchValue);
  }

  return (
    <div className="container">
      <SearchForm 
        submitSearch = {handleSearch}
      />
      <MainNav 
        submitSearch = {handleSearch}
      />
      <PhotoFetcher 
        searchValue = {searchValue}
        myApiKey = {myApiKey}
      />
    </div>
  );
}

export default App;
