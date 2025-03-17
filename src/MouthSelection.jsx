import React from "react";

const MouthSelection = ({ setMouth }) => {
  const mouthOptions = ["Mouth_1", "Mouth_2", "Mouth_3", "Mouth_4", "Mouth_5", "Mouth_6"];

  return (
    <div className="mouth-selection">
      {mouthOptions.map((mouth) => (
        <button key={mouth} className="feature-button" onClick={() => setMouth(mouth)}>
          <img src={`/assets/${mouth}.png`} className="mouth-thumbnail" />
        </button>
      ))}
    </div>
  );
};

export default MouthSelection;
