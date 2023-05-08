import React from "react";

function Modalpopup(props) {
  const charactername = props.name;
  const species = props.species;
  const alive = props.status;

  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const buttonCloseModal = document.querySelector(".close-modal");
  const ButtonOpenModal = document.querySelectorAll(".show-modal");

  const openModal = function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  // find all buttons and add eventListener
  for (let i = 0; i < ButtonOpenModal.length; i++)
    ButtonOpenModal[i].addEventListener("click", openModal);
  // when only one line after the for loop, it doesn't need {}

  // when click, close Modal (therefore closeModal without ())
  buttonCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  return (
    <div>
      <div class="modal hidden">
        <button class="close-modal">&times;</button>
        <h3>{charactername}</h3>
        <p>Species: {species}</p>
        <p>Status: {alive}</p>
      </div>
      <div class="overlay hidden"></div>
    </div>
  );
}

export default Modalpopup;
