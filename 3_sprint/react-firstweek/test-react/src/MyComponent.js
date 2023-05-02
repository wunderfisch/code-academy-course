import React from "react";

function MyComponent() {
  //JS Section
  const favDog = "Schäferhund";
  const favDog2 = "Neufundländer";
  const drooling = "high";
  // JS Section End
  // JSX Setion
  return (
    <div>
      {/* everything needs to be in a single container, best one div */}
      <h1>This is my first component</h1>
      {/* Parantheses need to be exactly like here when if/else is used. Better not like this */}
      {/*       {(() => {
        if (drooling === "high") {
          return <h2>{favDog2}</h2>;
        } else {
          return <h2>{favDog}</h2>;
        }
      })()} */}

      {/* if/else in React better with ternary operator */}
      {drooling === "high" ? <h2>{favDog2}</h2> : <h2>{favDog}</h2>}
    </div>
  );
}
export default MyComponent;
