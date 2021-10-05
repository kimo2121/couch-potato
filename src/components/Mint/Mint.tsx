import React from "react";
import "./mint.css";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Mint: React.FC = () => {
  return (
    <div className="mint">
      <p>Total Minted: 0/10,000</p>
      <Box className="slider-box">
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </Box>
      <p>Mint 0 NFT (0 BNB)</p>
      <button>MINT</button>
    </div>
  );
};

export default Mint;
