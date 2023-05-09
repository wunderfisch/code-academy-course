import React, { useEffect, useState } from "react";
import Card2 from "../components/Card2";
import Modal from "../components/Modal";
import Morepages from "../components/Morepages";

function Characters() {
  // create a state variable to store the list of characters
  const [characters, setCharacters] = useState();
  const [chosenCharacter, setChosenCharacter] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [pagenumber, setPagenumber] = useState(1);
  const [url, setUrl] = useState(
    `https://rickandmortyapi.com/api/character/?page=1`
  );

  // console.log("pages :>> ", pages.next);

  // fetch data from API
  const getCharacters = (url) => {
    // url can be in a own variable
    // do with template literals that get the page number send by a button pressed
    // let url = `https://rickandmortyapi.com/api/character/?page=${pagenumber}`;

    // regular fetch
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data :>> ", data);
        //
        // setCharacters(data.results);
        setCharacters(data);

        /* createCards(data.results); */
        // setPages(data.info);
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
  };

  // let pagenumber = 1;

  // useEffect(() => {
  //   getCharacters();
  // }, [pagenumber]);
  useEffect(() => {
    console.log("useEffcet run");
    getCharacters(url);
  }, []);

  /* Search bar */
  // state variable for temporary storing input
  // initialise as empty string because it will be a string
  const [inputText, setInputText] = useState("");

  let handleclick = (character) => {
    setChosenCharacter(character);
    // console.log("now", character);
    setIsOpen(!isOpen);
    // console.log("clicked");
  };

  // handler
  let onInputChangeHandler = (event) => {
    setInputText(event.target.value);
    console.log("InputText :>> ", inputText);
  };

  /*  function createCards(data) {
    let [cards, setCards] = useState();
  } */
  const nextPage = () => {
    // setPagenumber(pagenumber + 1);
    getCharacters(characters.info.next);
  };
  const beforePage = () => {
    getCharacters(characters.info.prev);
  };
  const firstPage = () => {
    getCharacters(url);
  };
  const lastPage = () => {
    getCharacters(
      `https://rickandmortyapi.com/api/character/?page=${characters.info.pages}`
    );
  };
  return (
    <div className="background">
      <h2>Characters</h2>
      {isOpen && characters && (
        <Modal handleclick={handleclick} chosenCharacter={chosenCharacter} />
      )}
      {/* {pages && (nextpage = pages.next)} */}

      {/* search bar */}
      {/* <section>
        <input
          type="text"
          value={inputText}
          onChange={onInputChangeHandler}
        ></input>
      </section> */}
      {/* section to hold all cards */}
      <section>
        {/* singel card */}
        <div className="card_grid">
          {/* image */}
          {characters ? (
            characters.results.map((character) => {
              return (
                <>
                  <div>
                    <Card2
                      key={character.id}
                      name={character.name}
                      src={character.image}
                      // species={character.species}
                    />

                    <button
                      className="ownbutton"
                      onClick={() => handleclick(character)}
                    >
                      more
                    </button>
                  </div>
                  {/*                   {isOpen && (
                    <Modal handleclick={handleclick} character={character} />
                  )} */}
                </>
              );
            })
          ) : (
            <p>loading...</p>
          )}
        </div>
      </section>
      <div className="headspace">
        {/* <button onClick={pages && (url = pages.next)}>next page</button> */}
        <button onClick={firstPage}>{"first page"}</button>{" "}
        <button onClick={beforePage}>{"<<< page before"}</button>{" "}
        <button onClick={nextPage}>{"next page >>>"}</button>{" "}
        <button onClick={lastPage}>{"last page >>>"}</button>
      </div>
      {/*   {characters &&
        characters.map((character, index) => {
          // fetch is by default asynchronous, when the compiler arrives here the setCharacters(data.results) in second .then has not run yet
          // so map finds nothing. therefor do in react a "conditional render"
          // conditional render means: loop only over array if something is inside
          // therefor: characters && characters.map - this means only if characters is true run second part
          return (
            <p>
              Character key={index} {character.name}
            </p>
          );
        })} */}
      {/*  instead of conditinal rendering we can also use a ternary operator. if characters is true go on... */}
      {/* {characters ? (
        characters.map((character, index) => {
          return <div><p key={index}>{character.name}</p>
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
