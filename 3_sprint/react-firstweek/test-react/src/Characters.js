import React, { useEffect, useState } from "react";

function Characters() {
  // create a state variable to store the list of characters
  const [characters, setCharacters] = useState();

  /* 
      // fetch data from API 
    const getCharacters = () => {
    // url can be in a own variable
    let url = "https://rickandmortyapi.com/api/character";

    // regular fetch
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data :>> ", data);
        //
        setCharacters(data.results);
      })
      .catch((error) => {
        console.log("error :>> ", error);
      }); */

  // same with try and catch

  const getCharacters = async () => {
    // url can be in a own variable
    let url = "https://rickandmortyapi.com/api/character";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      {/*   {characters &&
        characters.map((firstparameter, index) => {
          // fetch is by default asynchronous, when the compiler arrives here the setCharacters(data.results) in second .then has not run yet
          // so map finds nothing. therefor do in react a "conditional render"
          // conditional render means: loop only over array if something is inside
          // therefor: characters && characters.map - this means only if characters is true run second part
          return (
            <p>
              Character key={index} {firstparameter.name}
            </p>
          );
        })} */}
      {/*  instead of conditinal rendering we can also use a ternary operator. if characters is true go on... */}
      {characters ? (
        characters.map((firstparameter) => {
          return <p>{firstparameter.name}</p>;
        })
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default Characters;
