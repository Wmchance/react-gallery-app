import React from "react";
import MainNav from "./components/MainNav";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <MainNav />
    </div>
  );
}

export default App;
