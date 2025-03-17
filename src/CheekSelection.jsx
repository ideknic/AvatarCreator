import React from "react";

const CheekSelection = ({ setCheeks }) => {
  const cheekOptions = ["Cheeks_1", "Cheeks_2", "Cheeks_3", "No_Cheeks"]; //MAKE NO CHEEKS FILE

  return (
    <div className="cheek-selection">
      {cheekOptions.map((cheek) => (
        <button key={cheek} className="feature-button" onClick={() => setCheeks(cheek)}>
          <img src={`/assets/${cheek}.png`} className="cheek-thumbnail" />
        </button>
      ))}
    </div>
  );
};

export default CheekSelection;
