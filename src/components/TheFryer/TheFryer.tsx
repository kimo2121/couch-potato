import React from "react";
import theFryer from "../../assets/images/generatedtext (5).png";
import frame1 from "../../assets/images/Frame 1.png";
import frame2 from "../../assets/images/Frame2.png";
import frame3 from "../../assets/images/Frame 3.png";
import "./theFryer.css";
import Image from "../Image/Image";
const data = [
  {
    img: frame1,
    text: "10,000 Provably-rare Couch Potato tokens",
  },
  {
    img: frame2,
    text: "Ownership and commercial usage rights given to the consumer over their NFT",
  },
  {
    img: frame3,
    text: "Fair Launch, fair distribution: All Potatoes cost 0.33 BNB",
  },
];
const TheFryer: React.FC = () => {
  return (
    <div className="fryer-container">
      <h2>
        <img src={theFryer} alt="" />
      </h2>
      <p>
        When you mint a Couch Potato, you’re not simply buying an avatar or a
        provably-rare piece of art. You are gaining membership access to a club
        whose benefits and offerings will increase over time. Your Couch Potato
        can serve as your digital identity, and open digital doors for you.
      </p>
      <div className="imgs-container">
        <div className="frame-container">
          <Image className="fryer-frame" src={frame1} />
          <p>10,000 Provably-rare Couch Potato tokens</p>
        </div>
        <div className="frame-container">
          <Image className="fryer-frame" src={frame2} />
          <p>
            Ownership and commercial usage rights given to the consumer over
            their NFT
          </p>
        </div>
        <div className="frame-container">
          <Image className="fryer-frame" src={frame3} />
          <p>Fair Launch, fair distribution: All Potatoes cost 0.33 BNB</p>
        </div>
      </div>
    </div>
  );
};

export default TheFryer;
