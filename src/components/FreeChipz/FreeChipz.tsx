import React from "react";
import "./FreeChipz.css";
import welcome from "../../assets/images/generatedtext.png";
import freeChipz from "../../assets/images/freeChipz.png";
import couchPotato from "../../assets/images/couchPotatoLarge.png";
import lounge from "../../assets/images/generatedtext (10).png";
const FreeChipz: React.FC = () => {
  return (
    <div className="free-chipz-page">
      <div className="free-chipz">
        <div className="chipz-left">
          <img src={welcome} alt="" />
          <img src={freeChipz} alt="" />
          <p>Free Chips for Couch Potato owners. (That's Free BNB!)</p>
          <p>
            To get started, connect your MetaMask or Compatible wallet and sign
            in with your Twitter and Discord profiles to start earning Free
            Chips!
          </p>
          <p>
            Plus, see all the other Kings and Queens who have joined the Free
            Chips Program!
          </p>
          <img src={lounge} alt="" />
          <span>
            Connect Wallet To See All The Possibilities Your NFT holds
          </span>
        </div>
        <div className="chipz-right">
          <img src={couchPotato} alt="" />
          <button>COMMING SOON</button>
          <p>Connect your wallet now to start getting Potatoes!</p>
        </div>
      </div>
      <div className="chipz-footer">
        <div className="chipz-left-footer">
          <a href="/">Privacy Policy </a> | <a href="/"> Terms of Use</a>
        </div>
        <div className="chipz-right-footer">
          <a href="/">Support </a> | <a href="/"> CouchPotato</a>
        </div>
      </div>
    </div>
  );
};

export default FreeChipz;
