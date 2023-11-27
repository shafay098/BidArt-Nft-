import React from "react";
const TopSellerCard = (props) => {
  const { cardData } = props;
  const { SellerName, SellerTotalLikes, SelllerTotalItems, SellerTotalViews } =
    cardData;
  return (
    <>
      <div className="top-seller-card px-3 px-sm-3 px-lg-0 px-xl-0 px-md-2 d-flex align-items-center justify-content-lg-around py-3 justify-content-sm-between justify-content-md-between justify-content-between  rounded-2 ">
        <div className="tsc-card-left d-flex">
          <div className="tsc-card-media d-flex align-items-center">
            <div className="tsc-card-img">
            </div>
            <div className="tsc-card-media-left">
              <h3>{SellerName}</h3>
              <p>{SellerTotalLikes}k</p>
            </div>
          </div>
        </div>
        <div className="tsc-card-right">
          <ul className="tsc-ul">
            <li>
              <i className="fas fa-list-ul fa-fw"></i> {SelllerTotalItems} Items
            </li>
            <li>
              <i className="far fa-eye fa-fw"></i> {SellerTotalViews}K Views
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopSellerCard;
