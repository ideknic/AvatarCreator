import React from "react";

const EyeSelection = ({ setEyes }) => {
  const eyeOptions = ["Eyes_1", "Eyes_2", "Eyes_3", "Eyes_4", "Eyes_5"];

  return (
    <div className="eye-selection">
      {eyeOptions.map((eye) => (
        <button key={eye} className="feature-button" onClick={() => setEyes(eye)}>
          <img src={`/assets/${eye}.png`} className="eye-thumbnail" />
        </button>
      ))}
    </div>
  );
};

export default EyeSelection;
