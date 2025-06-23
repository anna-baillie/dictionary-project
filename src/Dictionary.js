import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Definition from "./Definition.js";
import Photos from "./Photos.js";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [definition, setDefinition] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }
  function handleResponse(response) {
    setDefinition(response.data);
  }

  function handlePhotoResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let photosApiKey = "8o2ff7498032b5ae4f9bt64daad694e7";
    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${photosApiKey}`;
    axios.get(photosApiUrl).then(handlePhotoResponse);
    let apiKey = "8o2ff7498032b5ae4f9bt64daad694e7";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <div className="DictionaryHeader">
        <h1>dictionary</h1>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeyWordChange}
            className="SearchBox"
            placeholder="Search for a word"
          />
        </form>
      </div>
      <Definition definition={definition} />
      <Photos photos={photos} />
    </div>
  );
}
