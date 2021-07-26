import React, { useEffect } from "react";
import "./SearchBar.css";

function SearchBar({stateSearch,setStateSearch}) {
  
  const onChange = (event) => {
    setStateSearch(event.target.value);
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="box">
      <div className="container-1">
        <span className="icon">
          <i className="fa fa-search"></i>
        </span>
        <input
          type="search"
          id="search"
          value={stateSearch}
          onChange={onChange}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default SearchBar;
