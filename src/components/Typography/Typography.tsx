import React from "react";
import "./typography.css";
interface typotypes {
  className?: string;
}
const Typography: React.FC<typotypes> = ({ className }) => {
  return <p className={className + "general-style"}></p>;
};

export default Typography;
