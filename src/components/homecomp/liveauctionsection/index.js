import React from "react";
import "../../../common/main.css";
import LiveAuctionSlider from "./LiveAuctionSlider";
import ExploreMoreButton from "../../common/button/exploremorebutton/ExploreMoreButton";
const LiveAuctionSection = () => {
  const btnText="Exlpore More"
  const handleClickBtn =()=>{
    console.log(btnText)
  } 
  return (
    <div className="container-fluid live-auction-container margin-top" id='live-auction-section'>
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div className="live-auction-title">
            <h2>Live Auction</h2>
          </div>
          <div className="live-auction-explore-btn">
            <ExploreMoreButton btnText={btnText} handleClickBtn={handleClickBtn} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <LiveAuctionSlider />
        </div>
      </div> 
    </div>
  );
};

export default LiveAuctionSection;
