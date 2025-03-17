const ControlPanel = ({ setActiveSection }) => {
  return (
    <div className="control-panel">
      <button onClick={() => setActiveSection("Base")}>Base</button>
      <button onClick={() => setActiveSection("Eyes")}>Eyes</button>
      <button onClick={() => setActiveSection("Nose")}>Nose</button>
      <button onClick={() => setActiveSection("Mouth")}>Mouth</button>
      <button onClick={() => setActiveSection("Cheeks")}>Cheeks</button>
      <button onClick={() => setActiveSection("Necklace")}>Necklace</button>
      <button onClick={() => setActiveSection("Earrings")}>Earrings</button>
      <button onClick={() => setActiveSection("Shirt")}>Shirt</button>
      <button onClick={() => setActiveSection("Hair")}>Hair</button>
    </div>
  );
};

export default ControlPanel;

