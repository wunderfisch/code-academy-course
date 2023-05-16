import React from "react";

function Cardview(props) {
  const plantname = props.name;
  const image = props.src;
  const license = props.license;
  const license_url = props.license_url;
  const key = props.key;
  return (
    <div>
      <div className="card">
        <img className="cardimage" src={image} />
        <a href={license_url}>
          <p className="license">Picture: {license}</p>
        </a>
        <div className="cardbody">
          <div className="cardtitle">{plantname}</div>
          {/* <button onClick={}>more info</button> */}
          {/* button of clicked element sends id to singlePlant and routes the user there */}
        </div>
      </div>
    </div>
  );
}

export default Cardview;
