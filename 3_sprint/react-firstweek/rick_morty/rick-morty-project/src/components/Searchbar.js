import React, { useState } from "react";

function Searchbar() {
  /* Search bar */
  // state variable for temporary storing input
  // initialise as empty string because it will be a string
  const [inputText, setInputText] = useState("");

  // handler
  let onInputChangeHandler = (event) => {
    setInputText(event.target.value);
    console.log("InputText :>> ", inputText);
  };
  return (
    <div>
      <div>searchbar</div>
      <section>
        <input
          type="text"
          value={inputText}
          onChange={onInputChangeHandler}
        ></input>
      </section>
    </div>
  );
}

export default Searchbar;
