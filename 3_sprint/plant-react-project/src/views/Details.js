import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedPlant from "../components/DetailedPlant";

function Details() {
  console.log("useParams :>> ", useParams());
  const { id, common_name } = useParams();
  // here do another fetch with the what we get from the useParams
  const [url, setUrl] = useState(
    `https://perenual.com/api/species/details/${id}?key=${process.env.REACT_APP_API_KEY}`
  );
  const [detailedPlant, setDetailedPlant] = useState();

  const getPlants = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data :>> ", data);
        setDetailedPlant(data);
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
  };

  useEffect(() => {
    getPlants(url);
  }, []);
  console.log("url", url);

  return (
    <div>
      <div className="displaysingleplant">
        <h2>Details on {common_name}</h2>
        {detailedPlant ? (
          <DetailedPlant detailedPlant={detailedPlant} />
        ) : (
          <p>...loading...</p>
        )}
      </div>
    </div>
  );
}

export default Details;
