import React from "react";

const ShirtSelection = ({ setShirt }) => {
  const shirtOptions = ["Shirt_1", "Shirt_2", "Shirt_3"];

  return (
    <div className="shirt-selection">
      {shirtOptions.map((shirt) => (
        <button key={shirt} className="feature-button" onClick={() => setShirt(shirt)}>
          <img src={`/assets/${shirt}.png`} alt={shirt} className="shirt-thumbnail" />
        </button>
      ))}
    </div>
  );
};

export default ShirtSelection;
