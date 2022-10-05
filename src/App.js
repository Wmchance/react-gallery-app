import React, { useState } from "react";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainNav from "./components/MainNav";
import SearchForm from "./components/SearchForm";
import PhotoFetcher from "./components/PhotoFetcher";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import apiKey from "./config"; //Flickr api key


function App() {

  const myApiKey = apiKey;

  const [searchValue, setSearchValue] = useState(""); //Store search value from SearchForm & MainNav

  //Function to lift search values from MainNav & SearchForm components
  const handleSearch = (e, searchValue) => {
    e.preventDefault();
    setSearchValue(searchValue);
  }

  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm 
          submitSearch = {handleSearch}
        />
        
        <MainNav 
          submitSearch = {handleSearch}
        />
        <Routes>
            <Route path="/:searchVal"
              element={<PhotoFetcher 
                searchValue = {searchValue}
                myApiKey = {myApiKey}
              />} 
            />

            <Route path="/" element={<Home />} />

            {/* Render 404 message when there are no matching routes */}
            <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
