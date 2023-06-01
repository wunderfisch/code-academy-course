import React, { useContext, useEffect, useState } from "react";
import Cardview from "../components/Cardview";
import Searchbar from "../components/Searchbar";
import { AuthContext } from "../context/AuthContext";

function First() {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(
    `https://perenual.com/api/species-list?page=${page}&key=${process.env.REACT_APP_API_KEY}`
  );
  const [plants, setPlants] = useState();

  // connect for welcoming the user
  const { user } = useContext(AuthContext);

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
    console.log("increase page");
    setPage((prev) => prev + 1);
  }
  function decreasePage() {
    console.log("decrease page");
    setPage((prev) => prev - 1);
  }
  function firstPage() {
    setPage(1);
  }
  function lastPage() {
    setPage(99);
  }
  function randomPage() {
    setPage(makeRandom);
  }

  function makeRandom() {
    return Math.floor(Math.random() * 100);
  }

  const getSearch = (search) => {
    console.log("search :>> ", search);
    setUrl(
      `https://perenual.com/api/species-list?key=${process.env.REACT_APP_API_KEY}&q=${search}`
    );
  };

  // useEffect(() => {
  //   setUrl(`https://perenual.com/api/species-list?key=${process.env.REACT_APP_API_KEY}&q=${search}`);
  // }, [search]);

  useEffect(() => {
    setUrl(
      `https://perenual.com/api/species-list?page=${page}&key=${process.env.REACT_APP_API_KEY}`
    );
  }, [page]);

  useEffect(() => {
    getPlants(url);
  }, [url]);

  // console.log("url", url);
  // console.log("page", page);
  return (
    <div>
      <h1>Fun with plants</h1>
      {/* conditional rendering because user is on first loading null */}
      {user ? (
        <h3>
          Welcome <span className="yourmail">{user.email}</span>
        </h3>
      ) : (
        <h3>consider logging in to have even more fun with plants</h3>
      )}
      <Searchbar getSearch={getSearch} />
      <div className="cardgrid">
        {plants ? (
          plants.data.map((plant) => {
            return (
              <div key={plant.id}>
                <Cardview
                  id={plant.id}
                  // hand over the whole plant like plant={plant}
                  name={plant.common_name}
                  src={plant.default_image.small_url}
                  license={plant.default_image.license_name}
                  license_url={plant.default_image.license_url}
                />
              </div>
            );
          })
        ) : (
          <p>...loading...</p>
        )}
      </div>
      <div className="headspace">
        {(() => {
          if (page > 1) {
            return (
              <>
                {" "}
                <button onClick={firstPage}>{"first page"}</button>{" "}
                <button onClick={decreasePage}>{"<<< previous page"}</button>{" "}
              </>
            );
          }
        })()}{" "}
        <button onClick={randomPage}>{"random page"}</button>{" "}
        {(() => {
          if (page < 99) {
            return (
              <>
                <button onClick={increasePage}>{"next page >>>"}</button>{" "}
                <button onClick={lastPage}>{"last page"}</button>
              </>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default First;
