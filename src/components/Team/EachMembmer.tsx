import React from "react";
import Image from "../Image/Image";
import "./team.css";

interface types {
  item?: any;
  index?: number;
}

const EachMembmer: React.FC<types> = ({ item, index }) => {
  return (
    <div key={index}>
      <Image className="member-image" src={item.img} />
      <p>{item.name}</p>
    </div>
  );
};

export default EachMembmer;
