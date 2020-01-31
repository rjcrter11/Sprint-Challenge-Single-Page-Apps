import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [data, setData] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        // console.log(response);
        const characs = response.data.results.filter((charac) =>
          charac.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characs);
      })
      .catch((error) => {
        console.log("Data not fetched", error);
      });
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <h2>Character List: </h2>
      <div className="search-bar">
        <form className="search">
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            className="search-name"
            placeholder="Search by name..."
            autoComplete="off"
          />
        </form>
      </div>
      <div className="card-container">
        {data.map((data) => {
          return <CharacterCard data={data} key={data.id} />;
        })}
      </div>
    </section>
  );
}
