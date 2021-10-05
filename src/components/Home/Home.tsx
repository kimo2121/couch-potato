import React from "react";
import Gif from "../Gif/Gif";
import TheFryer from "../TheFryer/TheFryer";
import "./home.css";
import theGrease from "../../assets/images/generatedtext (7).png";
import theCouch from "../../assets/images/generatedtext (6).png";
import RoadMap from "../RoadMap/RoadMap";
import Team from "../Team/Team";
import NFTMARKET from "../../assets/images/NFTMARKET.png";
import NFTMARKET1 from "../../assets/images/NFTMARKET1.png";
import NFTMARKET3 from "../../assets/images/NFTMARKET3.png";
import NFTMARKET4 from "../../assets/images/NFTMARKET4.png";
import Footer from "../Footer/Footer";
import CustomizedAccordions from "../FAQ/FAQ";
import Image from "../Image/Image";
import { useHistory } from "react-router-dom";
import couchPotato from "../../assets/images/couchPotato.png";
const Home: React.FC = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = `/free-chipz`;
    history.push(path);
  };
  return (
    <div className="home">
      <div className="navbar">
        <button onClick={routeChange}>
          <img src={couchPotato} alt="" />
          Free <br /> CHIPZ
        </button>
        <button>
          <span></span>
          CONNECT
          <br /> WALLET
        </button>
      </div>
      <Gif />
      <TheFryer />
      <div className="the-grease">
        <img src={theGrease} alt="" />
        <ul>
          <li>
            Each Couch Potato is unique and programmatically generated from over
            150 possible traits, including expression, headwear, clothing, and
            more. All Potatoes are Fly, but some are Flyer than others.
          </li>
          <li>
            The Potatoes are stored as tokens on the Binance Smart Chain and
            hosted on IPFS. Minting a Potato costs 0.33 BNB.
          </li>
          <li>
            To access members-only areas such as THE COUCH, Holders will need to
            be signed into their Metamask Wallet.
          </li>
        </ul>
      </div>
      <RoadMap />
      <div className="the-couch">
        <h2>
          <img src={theCouch} alt="" />
          <br />
          Ultimate NFT Marketplace with Profit <br /> Sharing <br /> Coming
          Soon!
        </h2>
        <p>
          The Ultimate Profit Sharing NFT Marketplace that is built around
          holder incentives. Earn rewards while completing community tasks, or
          particpating in community events. Vote on proposal's and use of 20%
          Community Fund*
        </p>
        <p>
          Sleek Dashboard with easy rewards claim button with quick access to
          community rewards portal
        </p>
      </div>
      <div className="snaps-container">
        <Image className="snap-image" src={NFTMARKET} />
        <Image className="snap-image" src={NFTMARKET1} />
        <Image className="snap-image" src={NFTMARKET3} />
        <Image className="snap-image" src={NFTMARKET4} />
      </div>
      <CustomizedAccordions />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
