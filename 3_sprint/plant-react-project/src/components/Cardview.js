import React from "react";

function Cardview(props) {
  const plantname = props.name;
  const image = props.src;
  const license = props.license;

  return (
    <div>
      <div className="card">
        <img className="cardimage" src={image} />
        <div className="license">Picture: {license}</div>
        <div className="cardbody">
          <div className="cardtitle">{plantname}</div>
        </div>
      </div>
    </div>
  );
}

export default Cardview;
