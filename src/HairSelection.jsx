const HairSelection = ({ setHairType, setHairColor }) => {
    const hairTypes = ["1", "2", "3", "4"]; 
    const hairColors = [
      { name: "Brown", hex: "#2e180b" },
      { name: "Black", hex: "#121212" },
      { name: "Blonde", hex: "#f5df87" },
      { name: "Red", hex: "#eb8e46" }
    ]; // 
  
    return (
      <div className="hair-selection">
        {/* hair color select */}
        <div className="hair-color-section">
          <h3>Select Hair Color</h3>
          <div className="hair-color-row">
            {hairColors.map(({ name, hex }) => (
              <button
                key={name}
                onClick={() => setHairColor(name)}
                className="hair-color-btn"
                style={{ backgroundColor: hex }}
                aria-label={name}
              />
            ))}
          </div>
        </div>
  
        {/* hair style select*/}
        <div className="hair-style-section">
          <h3>Select Hair Style</h3>
          <div className="hair-style-row">
            {hairTypes.map((type) => (
              <button key={type} onClick={() => setHairType(type)} className="hair-style-btn">
                <img 
                  src={`/assets/Hair_${type}_Brown.png`} 
                  className="hair-thumbnail" 
                  alt={`Hair ${type}`} 
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default HairSelection;
  
  