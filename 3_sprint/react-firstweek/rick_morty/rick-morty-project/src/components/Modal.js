import React from "react";

function Modal(props) {
  const { handleclick, chosenCharacter } = props;
  console.warn(chosenCharacter.name);
  return (
    <div className="newmodal">
      <button className="close-modal" onClick={handleclick}>
        &times;
      </button>
      <p>Name: {chosenCharacter.name}</p>
      <p>Alive or dead: {chosenCharacter.status}</p>
      <p>Species: {chosenCharacter.species}</p>
      <p>Gender: {chosenCharacter.gender}</p>
      <p>Origin: {chosenCharacter.origin.name}</p>
    </div>
  );
}

export default Modal;
