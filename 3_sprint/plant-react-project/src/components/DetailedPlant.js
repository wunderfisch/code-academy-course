import React from "react";

//

function DetailedPlant({ detailedPlant }) {
  // console.log("props :>> ", props);
  const other_name = detailedPlant.other_name;
  return (
    <div>
      SinglePlant
      <div>
        <p>{other_name}</p>
      </div>
    </div>
  );
}

export default DetailedPlant;
