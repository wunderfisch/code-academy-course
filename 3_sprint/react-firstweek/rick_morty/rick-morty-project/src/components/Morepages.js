import React from "react";
// import Button from "react-bootstrap/Button";

function Morepages(nextpage) {
  console.log("nextpage :>> ", nextpage);
  return (
    <div className="headspace">
      <button className="ownbutton">{"<<< back"}</button>{" "}
      <a href={nextpage}>
        <button className="ownbutton">{"forward >>>"}</button>
      </a>
    </div>
  );
}

export default Morepages;
