import React from "react";

const BaseSelection = ({ setSkinTone }) => {
  const skinOptions = ["Skin_1", "Skin_2", "Skin_3", "Skin_4", "Skin_5"];

  return (
    <div className="base-selection">
      {skinOptions.map((skin) => (
        <button key={skin} className="feature-button" onClick={() => setSkinTone(skin)}>
          <img src={`/assets/${skin}.png`} className="skin-thumbnail" />
        </button>
      ))}
    </div>
  );
};

export default BaseSelection;


