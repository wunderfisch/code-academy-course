import React, { useEffect, useState } from "react";

function First() {
  //   const [url, setUrl] = useState(
  //     `https://perenual.com/api/species-list?page=1&key=${process.env.REACT_APP_API_KEY}`
  //   );
  const [plants, setPlants] = useState();

  const getPlants = () => {
    let url = `https://perenual.com/api/species-list?page=1&key=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data :>> ", data);
        setPlants(data);
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
  };

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <div>
      <p>something</p>
      {plants &&
        plants.data.map((plant) => {
          return <p>{plant.common_name}</p>;
        })}
      {/*  <section>
        <div>
          {plants ? (
            plants.result.map((plant) => {
              return (
                <p>
                  key={plant.id[0]}
                  name={plant.other_name[0]}
                </p>
              );
            })
          ) : (
            <p>...loading</p>
          )}
        </div>
      </section> */}
    </div>
  );
}

export default First;
