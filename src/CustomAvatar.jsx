import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import AvatarDisplay from "./AvatarDisplay";
import BaseSelection from "./BaseSelection";
import EyeSelection from "./EyeSelection";
import NoseSelection from "./NoseSelection";
import MouthSelection from "./MouthSelection";
import CheekSelection from "./CheekSelection";
import EarringSelection from "./EarringSelection";
import NecklaceSelection from "./NecklaceSelection";
import ShirtSelection from "./ShirtSelection";
import HairSelection from "./HairSelection";
import ControlPanel from "./ControlPanel";

const CustomAvatar = () => {
  const [skinTone, setSkinTone] = useState("Skin_1");
  const [eyes, setEyes] = useState("Eyes_1");
  const [nose, setNose] = useState("Nose_1");
  const [mouth, setMouth] = useState("Mouth_1");
  const [cheeks, setCheeks] = useState("No_Cheeks");
  const [necklace, setNecklace] = useState("No_Necklace");
  const [earring, setEarring] = useState("No_Earring");
  const [shirt, setShirt] = useState("Shirt_1");
  const [hairType, setHairType] = useState("1");
  const [hairColor, setHairColor] = useState("Brown");

  
  const [activeSection, setActiveSection] = useState(null);

  // ref to capture avatar 
  const avatarRef = useRef(null);

  // downloads avatar as image
  const downloadAvatar = () => {
    if (avatarRef.current) {
      html2canvas(avatarRef.current, { backgroundColor: null }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "my_avatar.png";
        link.click();
      });
    }
  };

  return (
    <div className="custom-avatar-container">
      {/* Wrap Avatar in a reference for screenshot */}
      <div ref={avatarRef} className="avatar-wrapper">
        <AvatarDisplay 
          skinTone={skinTone} 
          eyes={eyes} 
          nose={nose} 
          mouth={mouth} 
          cheeks={cheeks} 
          necklace={necklace} 
          earring={earring}
          shirt={shirt} 
          hairType={hairType} 
          hairColor={hairColor} 
        />
      </div>

      <ControlPanel setActiveSection={setActiveSection} />

      {/* Conditional Rendering Based on Active Section */}
      {activeSection === "Base" && <BaseSelection setSkinTone={setSkinTone} />}
      {activeSection === "Eyes" && <EyeSelection setEyes={setEyes} />}
      {activeSection === "Nose" && <NoseSelection setNose={setNose} />}
      {activeSection === "Mouth" && <MouthSelection setMouth={setMouth} />}
      {activeSection === "Cheeks" && <CheekSelection setCheeks={setCheeks} />}
      {activeSection === "Necklace" && <NecklaceSelection setNecklace={setNecklace} />}
      {activeSection === "Earrings" && <EarringSelection setEarring={setEarring} />}
      {activeSection === "Shirt" && <ShirtSelection setShirt={setShirt} />}
      {activeSection === "Hair" && <HairSelection setHairType={setHairType} setHairColor={setHairColor} />}

      
      <button onClick={downloadAvatar} className="download-btn">Download Avatar</button>
    </div>
  );
};

export default CustomAvatar;

