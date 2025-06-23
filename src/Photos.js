import React from "react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);

    return (
      <div className="Photos row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <a href={photo.url} target="_blank" rel="noreferrer">
                <img
                  class="img-fluid"
                  src={photo.src.landscape}
                  alt={photo.alt}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
