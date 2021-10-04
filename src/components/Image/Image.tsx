import React from "react";
import "./image.css";

interface imgTypes {
  className?: string;
  src?: string;
}

const Image: React.FC<imgTypes> = ({ className, src }) => {
  return <img alt="" src={src} className={className} />;
};

export default Image;
