import React from "react";
import "../styles/detailedPlant.css";

//

function DetailedPlant({ detailedPlant }) {
  // console.log("props :>> ", props);
  const plantname = detailedPlant.common_name;
  const plantimage = detailedPlant.default_image.regular_url;
  const license = detailedPlant.default_image.license_name;
  const license_url = detailedPlant.default_image.license_url;
  const type = detailedPlant.type;
  const dimension = detailedPlant.dimension;
  const origin = detailedPlant.origin;
  const indoor = detailedPlant.indoor;
  const flowers = detailedPlant.flowers;
  const cones = detailedPlant.cones;
  const fruits = detailedPlant.fruits;
  const edible_fruit = detailedPlant.edible_fruit;
  const description = detailedPlant.description;
  const leafs = detailedPlant.leaf;
  const leaf_color = detailedPlant.leaf_color;
  const edible_leaf = detailedPlant.edible_leaf;

  return (
    <div>
      <div className="detailedPage">
        <h3>{plantname}</h3>
        <div>
          <img
            src={plantimage}
            alt={`Photography of ${plantname}`}
            className="detailedImg"
          />
          <a href={license_url}>
            <p className="detailedLicense">Picture: {license}</p>
          </a>
        </div>
        <div className="detailedinfo">
          <div>
            <p>Type: {type}</p>
            <p>{dimension}</p>
          </div>
          <div>
            <p>Origin: {origin}</p>
          </div>
          <div>
            {indoor === true ? <p>indoor plant</p> : <p>ourdoor plant</p>}
          </div>
          <div>
            <p>
              The {type} has {flowers === true ? <>flowers</> : <>no flowers</>}
              , it has {cones === true ? <> cones</> : <> no cones</>} and
              {edible_fruit === true ? <> edible</> : <></>}
              {fruits === true ? <> fruits.</> : <> no fruits.</>}
            </p>
            <p>
              The {type} has {leaf_color}{" "}
              {leafs === true ? <>leafs. </> : <>no leafs. </>}
              {leafs === true && edible_leaf === true ? (
                <>The leafs are edible.</>
              ) : (
                <></>
              )}
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedPlant;
