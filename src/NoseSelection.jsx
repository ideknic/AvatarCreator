import React from "react";

const NoseSelection = ({ setNose }) => {
  const noseOptions = ["Nose_1", "Nose_2", "Nose_3", "Nose_4", "Nose_5"];

  return (
    <div className="nose-selection">
      {noseOptions.map((nose) => (
        <button key={nose} className="feature-button" onClick={() => setNose(nose)}>
          <img src={`/assets/${nose}.png`} className="nose-thumbnail" />
        </button>
      ))}
    </div>
  );
};

export default NoseSelection;
