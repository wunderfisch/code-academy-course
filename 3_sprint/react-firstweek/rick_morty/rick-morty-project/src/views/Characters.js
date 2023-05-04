import React, { useEffect, useState } from "react";

function Characters() {
  // create a state variable to store the list of characters
  const [characters, setCharacters] = useState();

  // fetch data from API
  const getCharacters = () => {
    // url can be in a own variable
    let url = "https://rickandmortyapi.com/api/character/?page=2";

    // regular fetch
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data :>> ", data);
        //
        setCharacters(data.results);
        /* createCards(data.results); */
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  /* Search bar */
  // state variable for temporary storing input
  // initialise as empty string because it will be a string
  const [inputText, setInputText] = useState("");

  // handler
  let onInputChangeHandler = (event) => {
    setInputText(event.target.value);
  };

  /*  function createCards(data) {
    let [cards, setCards] = useState();
  } */

  return (
    <div>
      <h2>Characters</h2>
      {/* search bar */}
      <section>
        <input
          type="text"
          value={inputText}
          onChange={onInputChangeHandler}
        ></input>
      </section>
      {/* section to hold all cards */}
      <section>
        {/* singel card */}
        <div>
          {/* image */}
          {characters ? (
            characters.map((firstparameter, index) => {
              return (
                <div key={firstparameter.id}>
                  <img src={firstparameter.image}></img>
                  <p>{firstparameter.name}</p>
                </div>
              );
            })
          ) : (
            <p>loading...</p>
          )}
        </div>
      </section>
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
      {/* {characters ? (
        characters.map((firstparameter, index) => {
          return <div><p key={index}>{firstparameter.name}</p>
          <p></p>
          </div>
          
          
        })
      ) : (
        <p>loading...</p>
      )} */}
    </div>
  );
}

export default Characters;

//Next steps:
//1. Create a card component, and build the card structure there. That compoennt should receive the character information as props
//2. display your cards in a grid
//3. create an show More info button...that is gonna open a modal
//4. build your modal either by adding a div to the card , that is inittialy hidden, or by building a modal component, and pass some infor as props to indicate if it should be hidden or not.
//5. Filtering : create an input, add a change event, and buil a function that onChange, it filters the original array according to the letters typed (using the character's name).
//6. look for a way of mapping over the array of filtered data  (maybe think about doing it since the beggining )
//7. Pagination: think about the concept : we fecht a new url, when we click in a button.(remember how to use the dependecy array in the useEffect...)
