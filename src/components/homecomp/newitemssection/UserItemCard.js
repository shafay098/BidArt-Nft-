import React from "react";
import { Images } from "../../../assets/images";
const UserItemCard = (props) => {
  const { userData, handleHistoryModal, handlePlaceBidModal } = props;
  const { name, title, currentBid, like } = userData;

  return (
    <div className="card user-item-card p-3">
      <div className="user-item-card-header">
        <div className="user-card-likes">
          <p>
            <i className="fas fa-heart fa-fw"></i>
            <span>{like}K</span>
          </p>
        </div>
        <div className="user-card-img">
          <img src={Images.CardAvatSrc} alt="" />
        </div>
        <div className="user-card-avatar">
          <a href="#home" className="user-avatar-link">
            <img src={Images.ButtonAvatarSrc} alt="Avatar" />
            <span>{name}</span>
          </a>
        </div>
      </div>
      <div className="user-item-card-body">
        <h3 className="user-card-title">
          <a href="explore-details.html">{title}</a>
        </h3>
        <p className="user-card-bid">
          Current Bid: <b className="cs-primary_color">{currentBid}</b>
        </p>
      </div>
      <div className="user-item-card-footer  w-100 d-flex justify-content-between">
        <button className="user-card-history-btn" onClick={()=>{handleHistoryModal()}}>
          <i className="fas fa-redo fa-fw"></i>
          View History
        </button>
        <button className="user-card-bid-btn effect-btn" onClick={()=>{handlePlaceBidModal()}}>
          <span>Place Bid</span>
        </button>
      </div>
    </div>
  );
};

export default UserItemCard;
