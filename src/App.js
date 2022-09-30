import React, { useState } from "react";
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import MainNav from "./components/MainNav";
import SearchForm from "./components/SearchForm";
import PhotoFetcher from "./components/PhotoFetcher";
import Yolo from "./components/Yolo";

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

        <PhotoFetcher 
          searchValue = {searchValue}
          myApiKey = {myApiKey}
        />
        <Routes>
          <Route path="/yolo" element={<Yolo/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
