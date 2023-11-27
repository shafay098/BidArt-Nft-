import React, { useState } from "react";
import "../../../common/main.css";
import CardData from "./card_data.json";
import UserItemCard from "./UserItemCard";
import UserHistoryModal from "./UserHistoryModal";
import UserPlaceBidModal from "./UserPlaceBidModal";
import ExploreMoreButton from "../../common/button/exploremorebutton/ExploreMoreButton";
const NewItemsSection = () => {
  const allUserNFTData = CardData;
  const fashionNFTData = CardData.slice(0, 3);
  const musicNFTData = CardData.slice(0, 3);
  const videoNFTData = CardData.slice(0, 1);
  const gamesNFTData = CardData.slice(0, 3);
  const [historyModalShow, setHistoryModalShow] = useState(false);
  const [placeBidModalShow, setPlaceBidModalShow] = useState(false);
  const handleHistoryModal = () => {
    setHistoryModalShow(!historyModalShow);
    const bodyScroll = document.getElementsByTagName("body")[0];
    bodyScroll.style.overflowY =
      historyModalShow === false ? "hidden" : "scroll";
  };
  const handlePlaceBidModal = () => {
    setPlaceBidModalShow(!placeBidModalShow);
    const bodyScroll = document.getElementsByTagName("body")[0];
    bodyScroll.style.overflowY =
      placeBidModalShow === false ? "hidden" : "scroll";
  };

  const btnText = "Explore More";
  const handleClickBtn = () => {
    console.log(btnText);
  };
  return (
    <div className="container-fluid margin-top" id="new-items-section">
      <div className="row pb-3 g-xl-0 g-lg-0 g-md-3 g-sm-3 g-3 ">
        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 order-1">
          <div className="new-items-left text-white  w-100 h-100 d-flex justify-content-start align-items-center">
            <h2>New Items</h2>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 order-xl-2 order-lg-2 order-md-3 order-sm-3 order-3">
          <div className="new-items-center d-flex justify-content-center h-100 align-items-center">
            <ul
              className="nav nav-tabs border-0 new-items-ul"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="new-items-btn active"
                  id="all-nft-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#all-nft-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="all-nft-tab-pane"
                  aria-selected="true"
                >
                  All NFT
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="new-items-btn"
                  id="fashion-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#fashion-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="fashion-tab-pane"
                  aria-selected="false"
                >
                  Fashion
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="new-items-btn"
                  id="music-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#music-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="music-tab-pane"
                  aria-selected="false"
                >
                  Music
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="new-items-btn"
                  id="video-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#video-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="video-tab-pane"
                  aria-selected="false"
                >
                  Video
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="new-items-btn"
                  id="games-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#games-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="games-tab-pane"
                  aria-selected="false"
                >
                  Games
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 order-xl-3 order-lg-3 order-md-2 order-sm-2 order-2">
          <div className="new-items-right w-100 h-100 d-flex justify-content-end align-items-center ">
            <ExploreMoreButton
              btnText={btnText}
              handleClickBtn={handleClickBtn}
            />
          </div>
        </div>
      </div>
      <div className="tab-content mt-4 mb-4" id="new-items-tab">
        <div
          className="tab-pane fade show active"
          id="all-nft-tab-pane"
          role="tabpanel"
          aria-labelledby="all-nft-tab"
          tabIndex="0"
        >
          <div className="row">
            <div className="col-12">
              <div className="user-all-nft-section animate__animated animate__zoomIn">
                {allUserNFTData.map((userData) => {
                  const { id } = userData;
                  return (
                    <UserItemCard
                      key={id}
                      userData={userData}
                      handleHistoryModal={handleHistoryModal}
                      handlePlaceBidModal={handlePlaceBidModal}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="fashion-tab-pane"
          role="tabpanel"
          aria-labelledby="fashion-tab"
          tabIndex="0"
        >
          <div className="row">
            <div className="col-12">
              <div className="fashion-nft-section animate__animated animate__zoomIn">
                {fashionNFTData.map((userData) => {
                  const { id } = userData;
                  return (
                    <UserItemCard
                      key={id}
                      userData={userData}
                      handleHistoryModal={handleHistoryModal}
                      handlePlaceBidModal={handlePlaceBidModal}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="music-tab-pane"
          role="tabpanel"
          aria-labelledby="music-tab"
          tabIndex="0"
        >
          <div className="row">
            <div className="col-12">
              <div className="music-nft-section animate__animated animate__zoomIn">
                {musicNFTData.map((userData) => {
                  const { id } = userData;
                  return (
                    <UserItemCard
                      key={id}
                      userData={userData}
                      handleHistoryModal={handleHistoryModal}
                      handlePlaceBidModal={handlePlaceBidModal}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="video-tab-pane"
          role="tabpanel"
          aria-labelledby="video-tab"
          tabIndex="0"
        >
          <div className="row">
            <div className="col-12">
              <div className="video-nft-section animate__animated animate__zoomIn">
                {videoNFTData.map((userData) => {
                  const { id } = userData;
                  return (
                    <UserItemCard
                      key={id}
                      userData={userData}
                      handleHistoryModal={handleHistoryModal}
                      handlePlaceBidModal={handlePlaceBidModal}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="games-tab-pane"
          role="tabpanel"
          aria-labelledby="games-tab"
          tabIndex="0"
        >
          <div className="row">
            <div className="col-12">
              <div className="games-nft-section animate__animated animate__zoomIn">
                {gamesNFTData.map((userData) => {
                  const { id } = userData;
                  return (
                    <UserItemCard
                      key={id}
                      userData={userData}
                      handleHistoryModal={handleHistoryModal}
                      handlePlaceBidModal={handlePlaceBidModal}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {historyModalShow && (
            <UserHistoryModal handleHistoryModal={handleHistoryModal} />
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {placeBidModalShow && (
            <UserPlaceBidModal handlePlaceBidModal={handlePlaceBidModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewItemsSection;
