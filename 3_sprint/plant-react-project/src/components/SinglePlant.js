import React from "react";

//

function SinglePlant(props) {
  console.log("this.props.first :>> ", props);
  const plantname = props.props.data.common_name;
  const image = props.src;
  const license = props.license;

  return (
    <div>
      SinglePlant
      <div>{plantname}</div>
    </div>
  );
}

export default SinglePlant;
