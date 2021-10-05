import React from "react";
import generatedtext from "../../assets/images/generatedtext.png";
import "./gif.css";
import PotatoGif from "../../assets/images/Potato Gif.gif";
import Mint from "../Mint/Mint";
const Gif: React.FC = () => {
  return (
    <div className="gif-component">
      <div className="head-span-mint-container">
        <img src={generatedtext} alt="" />
        <p>
          Couch Potatoes is a collection of 10,000 Cryptographically proven
          unique digital collectibles living on the Binance Smart Chain. Your
          Couch Potato doubles as your "Couch" membership card, and grants
          access to members-only benefits, the first of which is access to THE
          COUCH. Original Minter's enjoy
        </p>
        <h3>7% LIFE-TIME ROYALTIES</h3>
        <span>On Upcoming MarketPlace</span>
        <Mint />
      </div>
      <div className="gif-container">
        <img src={PotatoGif} alt="" />
      </div>
    </div>
  );
};

export default Gif;
