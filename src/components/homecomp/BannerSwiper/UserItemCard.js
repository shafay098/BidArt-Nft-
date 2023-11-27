import React from "react";
import { Images } from "../../../assets/images";
const UserItemCard = (props) => {
  const { userData, handleHistoryModal, handlePlaceBidModal } = props;
  const { name, title, currentBid, like } = userData;

  return (
    <div className="card user-item-card p-2 banner-card back gradient-bg-blue light-shadow-bg">
      <div className="user-item-card-header">
        <div className="user-card-likes">
          <p>
            <i className="fas fa-heart fa-fw"></i>
            <span className="responsive-banner-card-fontsize-12">{like}K</span>
          </p>
        </div>
        <div className="user-card-img">
          <img src={Images.CardAvatSrc} alt="" />
        </div>
        <div className="user-card-avatar">
          <a href="#home" className="user-avatar-link ">
            <img src={Images.ButtonAvatarSrc} alt="Avatar" />
            <span className="responsive-banner-card-fontsize-12">{name}</span>
          </a>
        </div>
      </div>
      <div className="user-item-card-body">
        <h3 className="user-card-title font-custom-12px pt-2 ">
          <a className="responsive-banner-card-fontsize-12" href="explore-details.html">{title}</a>
        </h3>
        <p className="user-card-bid font-custom-12px pb-2 responsive-banner-card-fontsize-12">
          Current Bid: <b className="cs-primary_color">{currentBid}</b>
        </p>
      </div>
      <div className="user-item-card-footer flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column w-100 d-flex justify-content-between mt-2 py-2">
        <button
          className="user-card-history-btn font-custom-12px pt-2 pb-2 responsive-banner-card-fontsize-12"
          onClick={() => {
            handleHistoryModal();
          }}
        >
          <i className="fas fa-redo fa-fw "></i>
          View History
        </button>
        <button
          className="user-card-bid-btn effect-btn font-custom-12px mt-2  mb-2 responsive-banner-card-fontsize-12"
          onClick={() => {
            handlePlaceBidModal();
          }}
        >
          <span>Place Bid</span>
        </button>
      </div>
    </div>
  );
};

export default UserItemCard;
