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

import apiKey from "./config";


function App() {

  const myApiKey = apiKey;

  const [searchValue, setSearchValue] = useState("");

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
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
