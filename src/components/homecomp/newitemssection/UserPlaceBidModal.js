import React from "react";
import "../../../common/main.css";
const UserPlaceBidModal = (props) => {
  const { handlePlaceBidModal } = props;
  return (
    <div className="user-place-bid-modal-container" id="bid-modal">
      <div className="card user-place-bid-modal-card animate__animated animate__fadeInUp">
        <div className="pbmc-close-btn">
          <button
            onClick={() => {
              handlePlaceBidModal();
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="place-bid-card-body">
          <h2 className="pbc-title">Place a Bid</h2>
          <div className="pbc-info">
            <ul className="pbc-info-ul m-0">
              <li className="my-3">
                <span>Current Balance</span>
                <b>13.45ETH</b>
              </li>
              <li className="my-3">
                <span>Current Bid</span>
                <b>0.28ETH</b>
              </li>
            </ul>
            <h4 className="pbc-form-head my-3">
              <san>You must bid at least 1 ETH</san>
              <span className="pbc-qty-title">
                Quantity 2 <span>Available</span>
              </span>
            </h4>
            <div className="pbc-input-group my-2">
              <input
                type="text"
                className="pbc-value pbc-input"
                placeholder="e.g ‘000.28’"
              />
              <input type="text" class="pbc-quantity pbc-input" placeholder="1" />
            </div>
            <ul className="pbc-info-ul my-2">
              <li>
                <span>Service fee 25%</span>
                <b>0.43ETH</b>
              </li>
            </ul>
            <p className="pbc-info-para my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </p>
            <button className="pbc-submit-btn effect-btn w-100">
              <span>Place a Bid</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPlaceBidModal;
