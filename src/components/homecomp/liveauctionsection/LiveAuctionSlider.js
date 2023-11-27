import React, { useState } from "react";
import "../../../common/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardData from "./card_data.json";
import { Pagination } from "swiper/modules";
import LiveAuctionCard from "./LiveAuctionCard";
import UserHistoryModal from "./UserHistoryModal";
import UserPlaceBidModal from "./UserPlaceBidModal";

const LiveAuctionSlider = () => {
  const allUsersAuctionData = CardData;
  const [historyModalShow, setHistoryModalShow] = useState(false);
  const [placeBidModalShow, setPlaceBidModalShow] = useState(false);

  const handleHistoryModal = (value=false) => {
    setHistoryModalShow(value);
    const bodyScroll = document.getElementsByTagName("body")[0];
    bodyScroll.style.overflowY =
      historyModalShow === value ? "hidden" : "scroll";
  };
  const handlePlaceBidModal = (value=false) => {
    setPlaceBidModalShow(value);
    const bodyScroll = document.getElementsByTagName("body")[0];
    bodyScroll.style.overflowY =
      placeBidModalShow === value ? "hidden" : "scroll";
  };
  return (
    <>
      <div className="live-auction-slider-container mt-4">
        <Swiper
          spaceBetween={30}
          autoHeight={true}
          slidesPerView={5}
          a11y={false}
          grabCursor={true}
          freeMode={true}
          speed={1500}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="auction-swiper-slider"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            385: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {allUsersAuctionData.map((auctionCardData) => {
            const { id } = auctionCardData;
            return (
              <SwiperSlide key={id} virtualIndex={id} className="auction-slide">
                <LiveAuctionCard
                  auctionCardData={auctionCardData}
                  handleHistoryModal={handleHistoryModal}
                  handlePlaceBidModal={handlePlaceBidModal}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="live-auction-history-modal">
        {historyModalShow && (
          <UserHistoryModal handleHistoryModal={handleHistoryModal} />
        )}
      </div>
      <div className="live-auction-place-bid-modal">
        {placeBidModalShow && (
          <UserPlaceBidModal handlePlaceBidModal={handlePlaceBidModal} />
        )}
      </div>
    </>
  );
};

export default LiveAuctionSlider;
