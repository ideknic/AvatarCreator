import React from "react";

const AvatarDisplay = ({ skinTone, eyes, nose, mouth, cheeks, necklace, earring, shirt, hairType, hairColor }) => {
  const hairFile = `Hair_${hairType}_${hairColor}`;

  return (
    <div className="avatar-container"> {/* wrapper for centering & border */}
      <div className="avatar-display">
        <img src={`/assets/${skinTone}.png`} className="skin-layer" />
        <img src={`/assets/${eyes}.png`} className="eyes-layer" />
        <img src={`/assets/${nose}.png`} className="nose-layer" />
        <img src={`/assets/${mouth}.png`} className="mouth-layer" /> 
        <img src={`/assets/${cheeks}.png`} className="cheeks-layer" />
        <img src={`/assets/${necklace}.png`} className="necklace-layer" />
        <img src={`/assets/${earring}.png`} className="earring-layer" />
        <img src={`/assets/${shirt}.png`} className="shirt-layer" />
        <img src={`/assets/${hairFile}.png`} className={`avatar-layer hair hair-${hairType}`} />
      </div>
    </div>
  );
};

export default AvatarDisplay;



