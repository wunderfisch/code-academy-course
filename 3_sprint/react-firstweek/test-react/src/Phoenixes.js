import React, { useEffect, useState } from "react";
import Student from "./Student";

function Phoenixes() {
  const initialList = [
    "Alireza",
    "Sonja",
    "Melissa",
    "Mila",
    "Sabir",
    "Martha",
    "Phouc",
    "Carl",
  ];
  const [group, setGroup] = useState(initialList);

  // state variable for temporary storing input before sending it to array
  // initialise as empty string because it will be a string
  const [inputText, setInputText] = useState("");

  // initial value of greet = "hey"
  const [greet, setGreet] = useState("hey");
  // function should run as soon as the component loads (= initial value won't be seen)
  const updateGreet = () => {
    setGreet("Guten Tag");
  };

  // a second element to be send somewhere
  const projectName = "React";

  // to get info from child to parent we have to use an event
  // because passing from child up to parent is not allowed
  // therefore create a function, functions can be send down from parent to child
  const getColor = (color) => {
    console.log("color :>> ", color);
  };

  // handler
  // a parameter here "onInputChangeHandler = ()" represents the event object
  let onInputChangeHandler = (event) => {
    console.log(event.target.value);
    // display input with what is typed
    setInputText(event.target.value);
    // check that variable inputText is storing what is typed:
    console.log("inputText :>> ", inputText);
    // but it is always one late. It always shows the previews state before it gets updated
    // to see the actual state the clg needs to be in the JSX part
  };

  // adding input to the array
  // .push does not notice react that there is a difference in the variable so it is not rendering again
  let addStudent = () => {
    setGroup([...group, inputText]);
  };

  useEffect(() => {
    console.log("useEffect updateGreet run first");
    updateGreet();
  }, [group]); // only runs when group changes

  return (
    /* This is the virtual DOM = a virtual html being put in folder "public", if something gets updated, it needs to be rendered to show the new state*/
    <div>
      <h3>{greet}</h3>
      <div>
        {/* add event to the input, assigne value of input to function above */}
        <input type="text" value={inputText} onChange={onInputChangeHandler} />
        {/* onclick call function */}
        <button onClick={addStudent}>Add student</button>
      </div>
      {/* this cgl shows the actual updated state of the variable */}
      {console.log("inputText in JSX :>> ", inputText)}
      <h3>All the Phoenixes are:</h3>
      {group.map((phoenix, index) => {
        return (
          /* first option */
          /*   <ul>
            <li key={index}>{phoenix}</li>
          </ul> */
          /* second option with Props (arguments passed into react components)
          data is the prop 
          It calls the function Student in the file ./Student*/
          /*    <Student
            key={index}
            data={phoenix}
            // second key-value pair to be send
            projectName={projectName}
          /> */
          // same with destructuring(kvp named the same) and a second key-value-pair
          <Student
            key={index}
            phoenix={phoenix}
            projectName={projectName}
            // pass the getColor function down to child
            getColor={getColor}
          />
        );
      })}
    </div>
  );
}

export default Phoenixes;
