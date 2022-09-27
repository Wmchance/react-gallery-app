import React from "react";
import MainNav from "./components/MainNav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <MainNav />
      <PhotoContainer />
    </div>
  );
}

export default App;
