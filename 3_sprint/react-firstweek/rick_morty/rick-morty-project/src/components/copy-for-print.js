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
  const getCharacters = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data :>> ", data);
        setCharacters(data);
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
  };

  useEffect(() => {
    console.log("useEffcet run");
    getCharacters(url);
  }, []);

  const [inputText, setInputText] = useState("");

  let handleclick = (character) => {
    setChosenCharacter(character);
    setIsOpen(!isOpen);
  };

  // handler
  let onInputChangeHandler = (event) => {
    setInputText(event.target.value);
    console.log("InputText :>> ", inputText);
  };

  const nextPage = () => {
    getCharacters(characters.info.next);
  };
  const beforePage = () => {
    getCharacters(characters.info.prev);
  };
  return (
    <div>
      <h2>Characters</h2>
      {isOpen && characters && (
        <Modal handleclick={handleclick} chosenCharacter={chosenCharacter} />
      )}
      <section>
        <div className="card_grid">
          {characters ? (
            characters.results.map((character) => {
              return (
                <>
                  <div>
                    <Card2
                      key={character.id}
                      name={character.name}
                      src={character.image}
                    />
                    <button
                      className="ownbutton"
                      onClick={() => handleclick(character)}
                    >
                      more
                    </button>
                  </div>
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
        <button onClick={beforePage}>{"<<< page before"}</button>{" "}
        <button onClick={nextPage}>{"next page >>>"}</button>
      </div>
    </div>
  );
}

export default Characters;
