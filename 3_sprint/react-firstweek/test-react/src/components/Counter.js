import React, { useState } from "react";

function Counter() {
  let initialNumber = 1;

  console.log("useState :>> ", useState("sth"));
  let [count, setCounter] = useState(initialNumber);

  function increaseCount() {
    console.log("click");
    // count++; does not work like this
    // value of count is increased BUT React doesn't know the state (previews and current value)

    // need to use the setCounter function of the state variable
    setCounter(count + 1);
  }
  return (
    <>
      <h2>{count}</h2>
      {/* button with controlled event */}
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default Counter;
