import React, { useState } from "react";

function Searchbar(props) {
  //   console.log("props :>> ", props);
  const [searchInput, setSearchInput] = useState("");
  const sendSearch = props.getSearch;

  const inputHandler = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSearch = () => {
    sendSearch(searchInput);
  };

  return (
    <div>
      <div className="searchbar">
        <label for="searchbar">Type plant name... </label>
        <input
          type="text"
          id="searchbar"
          value={searchInput}
          onChange={inputHandler}
        />
        <button onClick={handleSearch}>search</button>
      </div>
    </div>
  );
}

export default Searchbar;
