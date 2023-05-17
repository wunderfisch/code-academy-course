import React from "react";
import { Link } from "react-router-dom";

function Cardview(props) {
  const plantname = props.name;
  const image = props.src;
  const license = props.license;
  const license_url = props.license_url;
  const id = props.id;

  return (
    <div>
      <div className="card">
        <img
          className="cardimage"
          src={image}
          alt={`Photography of ${plantname}`}
        />
        <a href={license_url}>
          <p className="license">Picture: {license}</p>
        </a>
        <div className="cardbody">
          <div className="cardtitle">{plantname}</div>
          <Link to={`details/${id}/${plantname}`}>
            <button>more info</button>
          </Link>

          {/* button of clicked element sends id to singlePlant and routes the user there */}
        </div>
      </div>
    </div>
  );
}

export default Cardview;
