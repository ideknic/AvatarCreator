The following project can be opened with the following link: https://avatarcreator.surge.sh/

The following code creates a React 2D avatar creator app allowing users to create their own custom avatar. Users can click through each feature, such as skin tones, clothing, hair, and facial features, to add their preferred selection to their avatar. Features are layered on top of each other and the useState hook is used in React to update the avatar in real time. Users can click through sevearl different versions of each feature (e.g. multiple mouths, eyes, hair, etc.,) with each feature displaying on their avatar so users can see how it looks. Additionally, "html2canvas" was imported to allow avatars to be downloaded as image files.

To add additional options to current features, developers can simply upload new image .png files into the /public/assets folder and reference these images in their respective components. For example, if another eye option was added, the eye .png would be uploaded as Eyes_6.png and "Eyes_6" would be added into the eyeOptions array (line 4) in the EyeSelection.jsx component.

To add additional features that are not already present, developers can upload the image .png files int othe /public/assets folder and create a new component titled YourFeatureSelection.jsx in /src. The following code is used to create new components inside the YourFeatureSelection.jsx file:

"const YourFeatureSelection = ({ setYourFeature }) => {
  const yourfeatureOptions = ["YourFeature_1", "YourFeature_2", "No_Feature"]; /* array hosting .png files, additional option for no image file */

  return (
    <div className="yourfeature-selection">
      {yourfeatureOptions.map((feature) => (
        <button key={yourfeature} className="feature-button" onClick={() => setYourFeature(yourfeature)}>
          <img src={`/assets/${yourfeature}.png`} className="yourfeature-thumbnail" alt={yourfeature} />
        </button>
      ))}
    </div>
  );
};

export default YourFeatureSelection;"

Additionally, in AvatarDisplay.jsx a new image layer for your new feature will need added using:
  <img src={`/assets/${yourfeature}.png`} className="yourfeature-layer" alt="YourFeature" />

And by referencing your added feature in the AvatarDisplay function (line 3):
  const AvatarDisplay = ({ skinTone, eyes, nose, mouth, cheeks, necklace, earring, shirt, hairType, hairColor, /*YourFeature*/ }) => {

And to update the ControlPanel.jsx, the following will be added:
  <button onClick={() => setActiveSection("YourFeature")}>YourFeature</button> 

Finally, in CustomAvatar.jsx, developers should import their new feature component, set a constant value with:
  const [earring, setEarring] = useState("No_Earring");

And provide an active selection update by adding:
  {activeSection === "YourFeature" && <YourFeatureSelection setYourFeature={setYourFeature} />}


Developers adding new features should be mindful of alignment issues. Currently, all uploaded image sizes are 300x300px. Images underwent minor adjustments for alignment purposes in the stylesheet.css file. 


