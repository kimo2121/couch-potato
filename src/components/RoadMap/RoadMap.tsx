import React from "react";
import "./roadMap.css";

const RoadMap: React.FC = () => {
  return (
    <div id="RoadMap" className="road-map">
      <h1>Roadmap</h1>
      <div className="vertical-time-line">
        <div className="vertical-divider "></div>
        <div className="inner-line left">
          <div className="line-detail left">
            <div className="triangle left"></div>
            <h4>Phase 1</h4>
            <p>-Launch Day 9/10/21</p>
            <p>-Mint Day 10/10/21</p>
            <p>-Private Discord for our Couch Potatoes</p>
            <p>-Weekly Discord AMA's and Project Updates</p>
            <p>-First 1,000 Minted</p>
            <p>-4x 1 BNB Giveaway to Holders</p>
            <p>-Raririty Sniper Listing</p>
          </div>
          <div className="line-detail left">
            <div className="triangle left"></div>
            <h4>Phase 3</h4>
            <p>-Couch Potatoes Merchandise Store</p>
            <p>-Get Mashed! Our first NFT swap portal sneek peek!</p>
            <p>-Free Exclusive airdrop to holders</p>
            <p>-5,000 Minted</p>
            <p>-6x BNB giveaway to holders</p>
          </div>
          <div className="line-detail left">
            <div className="triangle left"></div>
            <h4>Phase 5</h4>
            <p>-500 Sucessful Marketplace Sales</p>
            <p>-Preview of Bake & Stake</p>
            <p>-Preview of "The NFT Oven" and Phase 2 of Marketing</p>
          </div>
        </div>
        <span className="web-v-divider"></span>
        <div className="inner-line right">
          <div className="line-detail right">
            <div className="triangle right"></div>
            <h4>Phase 2</h4>
            <p>
              <p>-Development of "The Couch" Ultimate NFT Marketplace</p>
              <p>
                -The Fryer- a 20% community wallet that will be used for a
                variety of things to ensure the longevity of our community.
              </p>
              <p>-Active and engaged community members rewards airdrop!</p>
              <p>-Release of the community rewards program</p>
              <p>-3,000 Minted</p>
              <p>-6x 1 BNB Giveaway to holders</p>
            </p>
          </div>
          <div className="line-detail right">
            <div className="triangle right"></div>

            <h4>Phase 4</h4>
            <p>
              -Couch Potatoes Exclusive animated film and community giveway!
            </p>
            <p>-Large Internet Marketing Campaign</p>
            <p>-10,000 Minted</p>
            <p>
              -Release of NFT Marketplace with Platform Fees Distrubuted between
              Holders!
            </p>
            <p>-3 Celebrity Endorsments</p>
            <p>-2 Billbords in 2 Major Cities or Countries!</p>
            <p>-NYC, Chicago & London Takeover!</p>
            <p>-$10,000 Community Giveaway</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
