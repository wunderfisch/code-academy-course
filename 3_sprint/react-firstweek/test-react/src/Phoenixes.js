import React from "react";
import Student from "./Student";

function Phoenixes() {
  const phoenixes = [
    "Alireza",
    "Sonja",
    "Melissa",
    "Mila",
    "Sabir",
    "Martha",
    "Phouc",
    "Carl",
  ];
  // a second element to be send somewhere
  const projectName = "React";

  // to get info from child to parent we have to use an event
  // because passing from child up to parent is not allowed
  // therefore create a function, functions can be send down from parent to child
  const getColor = (color) => {
    console.log("color :>> ", color);
  };

  return (
    <div>
      <h3>All the Phoenixes are:</h3>
      {phoenixes.map((phoenix, index) => {
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
