import React from "react";

const NecklaceSelection = ({ setNecklace }) => {
  const necklaceOptions = ["Necklace_1", "Necklace_2", "No_Necklace"];

  return (
    <div className="necklace-selection">
      {necklaceOptions.map((necklace) => (
        <button key={necklace} className="feature-button" onClick={() => setNecklace(necklace)}>
          <img src={`/assets/${necklace}.png`} className="necklace-thumbnail" />
        </button>
      ))}
    </div>
  );
};

export default NecklaceSelection;
