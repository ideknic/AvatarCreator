import React from "react";

const EarringSelection = ({ setEarring }) => {
  const earringOptions = ["Earring_1", "Earring_2", "No_Earring"];

  return (
    <div className="earring-selection">
      {earringOptions.map((earring) => (
        <button key={earring} className="feature-button" onClick={() => setEarring(earring)}>
          <img src={`/assets/${earring}.png`} className="earring-thumbnail" />
        </button>
      ))}
    </div>
  );
};

export default EarringSelection;
