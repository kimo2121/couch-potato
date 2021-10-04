import React from "react";
import "./team.css";
import NFT2 from "../../assets/images/NFT2.png";
import NFT3 from "../../assets/images/NFT3.png";
import NFT5 from "../../assets/images/NFT5.jpg";
import NFT6 from "../../assets/images/NFT6.png";
import NFT7 from "../../assets/images/NFT7.png";
import NFT8 from "../../assets/images/NFT8.png";
import EachMembmer from "./EachMembmer";
interface teamMembers {
  members: {
    img?: string;
    name?: string;
  }[];
}
const data1: teamMembers["members"] = [
  {
    img: NFT5,
    name: "Valentino",
  },
  {
    img: NFT2,
    name: "Shane",
  },
  {
    img: NFT3,
    name: "Abby",
  },
];
const data2: teamMembers["members"] = [
  {
    img: NFT6,
    name: "Valentino",
  },
  {
    img: NFT7,
    name: "Shane",
  },
  {
    img: NFT8,
    name: "Abby",
  },
];
const Team: React.FC = () => {
  return (
    <div className="team">
      <h1>MEET THE TEAM</h1>
      <div className="members">
        {data1.map((item, index) => (
          <EachMembmer item={item} index={index} />
        ))}
      </div>
      <div className="members">
        {data2.map((item, index) => (
          <EachMembmer item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Team;
