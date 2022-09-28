import React from "react";
import MainNav from "./components/MainNav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import PhotoFetcher from "./components/PhotoFetcher";

import apiKey from "./config";
const myApiKey = apiKey;

function App() {
  return (
    <div className="container">
      <SearchForm />
      <MainNav />
      <PhotoContainer /> {/* to PhotoFetcher */}
      <PhotoFetcher myApiKey = {myApiKey}/>
    </div>
  );
}

export default App;
