import React, { useState } from "react";
import "./Dictionary.css";

const dictionaryLibrary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

const Dictionary = () => {
  const dictionary = dictionaryLibrary;
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const foundWord = dictionary.find(
      entry => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundWord) {
      setResult(foundWord.meaning);
      console.log(foundWord);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="xdictionary-container">
      <h1>Dictionary App</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="result-box">
        <h3>Definition: </h3>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default Dictionary;
