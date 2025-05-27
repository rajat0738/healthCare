import React from "react";
import humanbody from "../assets/human-body.png";
import scan from "../assets/scan.png";
import magnify from "../assets/magnify.png";
import "../styles/AnatomySection.css";
const AnatomySection = () => {
  return (
    <div className="anatomy">
      <img
        src={humanbody}
        alt="Image not found"
        className="anatomy-image"
        width={300}
        height={450}
      />
      <img src={scan} height={55} width={50} className="scan heart" />
      <img src={scan} height={55} width={50} className="scan legs" />
      <img src={magnify} height={20} width={20} className="magnify" />
      <div className="tooltip heart">❤️ Healthy Heart</div>
      <div className="tooltip legs">🦵 Healthy Leg</div>
    </div>
  );
};

export default AnatomySection;
