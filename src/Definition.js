import React from "react";
import Meaning from "./Meaning.js";

export default function Definition(props) {
  if (props.definition) {
    return (
      <div className="Definition">
        <h2>
          {props.definition.word} <em>- {props.definition.phonetic}</em>
        </h2>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
