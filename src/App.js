import React from "react";
import MainNav from "./components/MainNav";
import SearchForm from "./components/SearchForm";
import PhotoFetcher from "./components/PhotoFetcher";

import apiKey from "./config";
const myApiKey = apiKey;

const handleSearch = (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
}

function App() {
  return (
    <div className="container">
      <SearchForm submitSearch = {handleSearch}/>
      <MainNav />
      <PhotoFetcher myApiKey = {myApiKey}/>
    </div>
  );
}

export default App;
