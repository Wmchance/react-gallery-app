import React, { useState } from "react";
import MainNav from "./components/MainNav";
import SearchForm from "./components/SearchForm";
import PhotoFetcher from "./components/PhotoFetcher";

import apiKey from "./config";

function App() {

  const myApiKey = apiKey;

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target[0].value);
  }

  return (
    <div className="container">
      <SearchForm submitSearch = {handleSearch}/>
      <MainNav />
      <PhotoFetcher 
        searchValue = {searchValue}
        myApiKey = {myApiKey}
      />
    </div>
  );
}

export default App;
