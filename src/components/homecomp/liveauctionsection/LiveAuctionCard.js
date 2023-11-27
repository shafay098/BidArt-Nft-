import React from "react";
import "../../../common/main.css";
import { Images } from "../../../assets/images";
const LiveAuctionCard = (props) => {
  const { auctionCardData, handleHistoryModal, handlePlaceBidModal } = props;
  const { name, title, currentBid, like } = auctionCardData;
  return (
    <div className="card user-item-card p-3">
      <div className="user-item-card-header">
        <div className="user-card-likes">
          <p>
            <i className="fas fa-heart fa-fw"></i>
            <span>{like}K</span>
          </p>
        </div>
        <div className="user-card-img uc-md-height">
          <img src={Images.CardAvatSrc} alt="" />
        </div>
        <div className="user-card-avatar avatar-imgs-btn-w-h">
          <a href="#home" className="user-avatars-link">
            <div className="users-avatars-link-imgs-group">
              <img src={Images.ButtonAvatarSrc} alt="Avatar" />
              <img src={Images.ButtonAvatarSrc} alt="Avatar" />
              <img src={Images.ButtonAvatarSrc} alt="Avatar" />
              <img src={Images.ButtonAvatarSrc} alt="Avatar" />
            </div>
            <span>{name} Place Bid</span>
          </a>
        </div>
      </div>
      <div className="user-item-card-body">
        <div className="user-card-count-down">
          <div className="count-down-dhms">
            <p>
              <span>0</span>
              <span>Days</span>
            </p>
          </div>
          <div className="count-down-dhms">
            <p>
              <span>0</span>
              <span>Hours</span>
            </p>
          </div>
          <div className="count-down-dhms">
            <p>
              <span>0</span>
              <span>Min</span>
            </p>
          </div>
          <div className="count-down-dhms">
          <p>
                <span>0</span>
                <span>Sec</span>
            </p>
          </div>
        </div>
        <h3 className="user-card-title">
          <a href="explore-details.html">{title}</a>
        </h3>
        <p className="user-card-bid">
          Current Bid: <b className="cs-primary_color">{currentBid}</b>
        </p>
      </div>
      <div className="user-item-card-footer  w-100 d-flex justify-content-between">
        <button
          className="user-card-history-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleHistoryModal(true);
          }}
        >
          <i className="fas fa-redo fa-fw"></i>
          View History
        </button>
        <button
          className="user-card-bid-btn effect-btn"
          onClick={(e) => {
            e.stopPropagation();
            handlePlaceBidModal(true);
          }}
        >
          <span>Place Bid</span>
        </button>
      </div>
    </div>
  );
};

export default LiveAuctionCard;
