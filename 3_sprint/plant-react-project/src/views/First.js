import React, { useEffect, useState } from "react";
import Cardview from "../components/Cardview";
import Credits from "../components/Credits";
import SinglePlant from "../components/SinglePlant";

function First() {
  let [page, setPage] = useState(1);
  let [url, setUrl] = useState(
    `https://perenual.com/api/species-list?page=${page}&key=${process.env.REACT_APP_API_KEY}`
  );
  const [plants, setPlants] = useState();

  const getPlants = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("data :>> ", data);
        setPlants(data);
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
  };

  function increasePage() {
    console.log("increae page");

    setPage(page + 1);
    setUrl(
      `https://perenual.com/api/species-list?page=${page}&key=${process.env.REACT_APP_API_KEY}`
    );
  }

  useEffect(() => {
    getPlants(url);
  }, [url]);

  console.log("url", url);

  // const nextPage = () => {
  //   getPlants(
  //     `https://perenual.com/api/species-list?page=${2}&key=${
  //       process.env.REACT_APP_API_KEY
  //     }`
  //   );
  // };

  console.log("page", page);
  return (
    <div>
      <h1>Fun with plants</h1>
      {/* <div className="hidden">
        <SinglePlant items={plants} />
      </div> */}
      <div className="cardgrid">
        {plants ? (
          plants.data.map((plant) => {
            return (
              <>
                <Cardview
                  key={plant.id}
                  name={plant.common_name}
                  src={plant.default_image.small_url}
                  license={plant.default_image.license_name}
                  license_url={plant.default_image.license_url}
                />
              </>
            );
          })
        ) : (
          <p>...loading...</p>
        )}
      </div>
      <div className="headspace">
        <button onClick={increasePage}>{"next page >>>"}</button>{" "}
        {/* <button onClick={beforePage}>{"<<< page before"}</button>{" "}
        <button onClick={firstPage}>{"first page"}</button>{" "}
        <button onClick={lastPage}>{"last page >>>"}</button> */}
      </div>
      <Credits />
    </div>
  );
}

export default First;
